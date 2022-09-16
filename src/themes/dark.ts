import type { AppTheme } from "./index";

const darkTheme: AppTheme = {
  color: {
    html: "rgb(39 39 42)", // zinc-800
    bgPrimary: "rgb(39 39 42)", // zinc-800
    fillIcon: "rgb(107 114 128)", // gray-500
    borderPrimary: "rgb(107 114 128)", // gray-500
  },
  gradient: {
    // Default to  'Miami Vice'
    globalFrom: "rgb(34 211 238)",
    globalVia: "rgb(103 232 249)",
    globalTo: "rgb(232 121 249)",
  },
};

export default darkTheme;
