export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    "--color-primary": variables.primary || "",
    "--color-secondary": variables.secondary || "",
    "--color-positive": variables.positive || "",
    "--color-negative": variables.negative || "",
    "--color-text-primary": variables.textPrimary || "",
    "--background-primary": variables.backgroundPrimary || "",
    "--background-sec": variables.backgroundSecondary || "",
  };
};
