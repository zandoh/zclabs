import { ThemeKey, themes } from "./index";
import type { AppTheme } from "./index";
const SSR = import.meta.env.SSR;

export const mapTheme = (variables: AppTheme): Record<string, string> => {
  return {
    // App theme variables for dark/light mode
    "--zc-color-base": variables.color.base,
    "--zc-color-lighter": variables.color.lighter,
    "--zc-color-darker": variables.color.darker,
    "--zc-color-text-base": variables.text.base,
    "--zc-color-text-lighter": variables.text.lighter,
    "--zc-color-text-color": variables.text.color,
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
