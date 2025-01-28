import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { imageService } from "@unpic/astro/service";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
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