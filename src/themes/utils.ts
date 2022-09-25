import { ThemeKey, themes } from "./index";
import type { AppTheme } from "./index";
const SSR = import.meta.env.SSR;

export const mapTheme = (variables: AppTheme): Record<string, string> => {
  return {
    // App theme variables for dark/light mode
    "--zc-color-theme-100": variables.color[100],
    "--zc-color-theme-200": variables.color[200],
    "--zc-color-theme-300": variables.color[300],
    "--zc-color-theme-400": variables.color[400],
    "--zc-color-theme-500": variables.color[500],
    "--zc-color-theme-600": variables.color[600],
    "--zc-color-theme-700": variables.color[700],
    "--zc-color-theme-800": variables.color[800],
    "--zc-color-theme-900": variables.color[900],
    "--zc-color-theme": "var(--zc-color-theme-500)",
    "--zc-color-theme-lighter": "var(--zc-color-theme-100)",
    "--zc-color-theme-darker": "var(--zc-color-theme-600)",
    "--zc-color-text-theme": variables.text.default,
    "--zc-color-text-theme-lighter": variables.text.lighter,
    "--zc-color-text-theme-darker": variables.text.darker,
    "--zc-color-text-theme-reverse": variables.text.reverse,
    // Used to override tailwind gradient variables for easy sub theme switching
    "--tw-gradient-from": variables.gradient.globalFrom,
    "--tw-gradient-via": variables.gradient.globalVia,
    "--tw-gradient-to": variables.gradient.globalTo,
    "--tw-gradient-stops":
      "var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)",
  };
};

export const applyTheme = (theme: ThemeKey): void => {
  const themeObject = mapTheme(themes[theme]);

  if (!themeObject) {
    return;
  }

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    document.documentElement.style.setProperty(property, themeObject[property]);
  });
};

export const getDefaultTheme = (): ThemeKey => {
  // Window is undefined during SSR, need a sensible default for TypeScript
  if (SSR) {
    return "light";
  }

  const browserPrefDark =
    globalThis.window.matchMedia &&
    globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (browserPrefDark) {
    return "dark";
  }

  return "light";
};
