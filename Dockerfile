FROM node:lts AS base
WORKDIR /app

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/

RUN ls -la

# Install pnpm
RUN npm install -g pnpm

# This multi-stage approach optimizes the build process and keeps the
# final image size smaller by separating build and runtime environments.
FROM base AS prod-deps
RUN pnpm install --prod

FROM base AS build-deps
RUN pnpm install

FROM build-deps AS build
COPY . .
RUN pnpm run build

FROM base AS runtime
# Copy dependencies
COPY --from=prod-deps /app/node_modules ./node_modules
# Copy the built ouput
COPY --from=build /app/dist ./dist

# Bind to all interfaces
ENV HOST=0.0.0.0

# Port to listen on
ENV PORT=4321

# Just convention, not required
EXPOSE 4321

# Start the app
CMD node ./dist/server/entry.mjs