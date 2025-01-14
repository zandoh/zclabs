import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { imageService } from "@unpic/astro/service";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
    imageService: true
  }),
  image: {
    service: imageService({
      fallbackService: "sharp",
      placeholder: "lqip",
      layout: "constrained",
    }),
  },
  integrations: [tailwind(), react(), compress()],
  publicDir: "./public",
});
