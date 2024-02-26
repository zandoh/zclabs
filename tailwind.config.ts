import { nextui } from "@nextui-org/react";
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

import typographyStyles from "./typography";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [typographyPlugin, nextui()],
  theme: {
    extend: {
      animation: {
        "spotify-amplify": "spotify-amplify 2s infinite",
      },
      keyframes: {
        "spotify-amplify": {
          "0%": {
            transform: "scale(0.8)",
            "box-shadow": "0 0 0 0 rgba(30, 215, 96, 1)",
          },
          "70%": {
            transform: "scale(1)",
            "box-shadow": "0 0 0 30px rgba(30, 215, 96, 0)",
          },
          "100%": {
            transform: "scale(0.8)",
          },
        },
      },
    },
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    typography: typographyStyles,
  },
} satisfies Config;
