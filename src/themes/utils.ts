import { themes } from "./index";
import type { AppTheme } from "./light";

export const mapTheme = (variables: AppTheme): Record<string, string> => {
  return {
    // These will be use to override tailwind gradient variables for easy sub theme switching
    "--tw-gradient-from": variables.gradient.globalFrom || "",
    "--tw-gradient-via": variables.gradient.globalVia || "",
    "--tw-gradient-to": variables.gradient.globalTo || "",
    "--tw-gradient-stops":
      "var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)",
  };
};

export const applyTheme = (theme: string): void => {
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
