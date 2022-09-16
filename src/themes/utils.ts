import { ThemeKey, themes } from "./index";
import type { AppTheme } from "./index";
const SSR = import.meta.env.SSR;

export const mapTheme = (variables: AppTheme): Record<string, string> => {
  return {
    // App theme variables for dark/light mode
    "--app-html": variables.color.html,
    "--app-bg-primary": variables.color.bgPrimary,
    "--app-fill-icon": variables.color.fillIcon,
    "--app-border-primary": variables.color.borderPrimary,
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

// @TODO save/read this value to/from localStorage
export const getDefaultTheme = (): ThemeKey => {
  // Window is undefined during SSR, need a sensible default for TypeScript
  if (SSR) {
    return "light";
  }

  const browserPrefDark =
    globalThis.window.matchMedia &&
    globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (browserPrefDark) {
    globalThis.document.body.classList.add("dark");

    return "dark";
  }

  globalThis.document.body.classList.remove("dark");

  return "light";
};
