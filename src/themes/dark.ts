import type { AppTheme } from "./index";

const darkTheme: AppTheme = {
  color: {
    100: "#737373",
    200: "#666",
    300: "#595959",
    400: "#4d4d4d",
    500: "#404040",
    600: "#333",
    700: "#262626",
    800: "#1a1a1a",
    900: "#0d0d0d",
  },
  text: {
    default: "#ddd",
    lighter: "#eee",
    darker: "#c6c6c6",
    reverse: "#262626",
  },
  gradient: {
    // Default to  'Miami Vice'
    globalFrom: "rgb(34 211 238)",
    globalVia: "rgb(103 232 249)",
    globalTo: "rgb(232 121 249)",
  },
};

export default darkTheme;
