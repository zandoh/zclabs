import darkTheme from "./dark";
import lightTheme from "./light";

export const themes = {
  dark: darkTheme,
  light: lightTheme,
} as const;

export type AppTheme = typeof lightTheme;
export type ThemeKey = keyof typeof themes;
export type Themes = Record<ThemeKey, AppTheme>;
