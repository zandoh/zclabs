const subThemes = {
  "Miami Vice": {
    from: "rgb(34 211 238)",
    via: "rgb(103 232 249)",
    to: "rgb(232 121 249)",
    display: "from-cyan-400 via-cyan-300 to-fuchsia-400",
  },
  Hyper: {
    from: "rgb(236 72 153)",
    via: "rgb(239 68 68)",
    to: "rgb(234 179 8)",
    display: "from-pink-500 via-red-500 to-yellow-500",
  },
  Beachside: {
    from: "rgb(254 240 138)",
    via: "rgb(187 247 208)",
    to: "rgb(34 197 94)",
    display: "from-yellow-200 via-green-200 to-green-500",
  },
  Hawaii: {
    from: "rgb(134 239 172)",
    via: "rgb(253 224 71)",
    to: "rgb(249 168 212)",
    display: "from-green-300 via-yellow-300 to-pink-300",
  },
  Rasta: {
    from: "rgb(101 163 13)",
    via: "rgb(253 224 71)",
    to: "rgb(220 38 38)",
    display: "from-lime-600 via-yellow-300 to-red-600",
  },
  Powerpuff: {
    from: "rgb(56 189 248)",
    via: "rgb(251 113 133)",
    to: "rgb(163 230 53)",
    display: "from-sky-400 via-rose-400 to-lime-400",
  },
} as const;

export type SubThemeKeys = keyof typeof subThemes;
export type SubThemeAttributes = typeof subThemes[SubThemeKeys];
export default subThemes;
