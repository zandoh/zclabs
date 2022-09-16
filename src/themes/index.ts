import dark from "./dark";
import light, { AppTheme } from "./light";

// @TODO try to figure this out with hydration
// export const DEFAULT_THEME: string =
//   globalThis.window.matchMedia &&
//   globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";

export const DEFAULT_THEME: string = "light";

export const themes: Record<string, AppTheme> = {
  dark,
  light,
};
