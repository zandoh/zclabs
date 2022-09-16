/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // .dark higher in the DOM tree triggers dark mode
  // instead of the tailwind default of prefers-color-scheme.
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {},
  },
};
