import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import { imageService } from "@unpic/astro/service";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    devImageService: "sharp",
  }),
  image: {
    service: imageService({
      fallbackService: "astro",
      placeholder: "blurhash",
      layout: "constrained",
    }),
  },
  integrations: [tailwind(), react(), compress()],
  publicDir: "./public",
});
