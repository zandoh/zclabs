const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        app: {
          antiFlashWhite: "#EEEEEE",
          gunmetal: "#222831",
          onyx: "#393E46",
          verdigris: "#00ADB5",
          jade: "#04A777",
        },
      },
    },
  },
  plugins: [],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
