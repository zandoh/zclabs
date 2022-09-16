import type { HTMLAttributes } from "react";
import { handleKeyPress, KeyboardKeyCode } from "../hooks/useKeyPress";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";

const HeaderSettingsMenu = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
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
  };

  const changeSubTheme = (subTheme: Record<string, string>) => {
    document.documentElement.style.setProperty(
      "--tw-gradient-from",
      subTheme.from
    );
    document.documentElement.style.setProperty(
      "--tw-gradient-via",
      subTheme.via
    );
    document.documentElement.style.setProperty("--tw-gradient-to", subTheme.to);
  };

  return (
    <div
      className="absolute right-0 z-10 mt-8 w-36 origin-top-right rounded-md border border-gray-100 bg-white shadow-2xl"
      role="menu"
    >
      <div className="from-400 flex flex-row flex-wrap justify-center p-2">
        {Object.entries(subThemes).map(([subThemeName, subTheme]) => (
          <div
            className={`mx-4 my-2 h-6 w-6 cursor-pointer rounded-xl bg-gradient-to-r ${subTheme.display}`}
            role="menuitem"
            title={subThemeName}
            aria-label={subThemeName}
            key={subThemeName}
            onClick={() => changeSubTheme({ ...subTheme, subThemeName })}
            onKeyDown={(e) =>
              handleKeyPress(e, KeyboardKeyCode.ENTER, () =>
                changeSubTheme({ ...subTheme, subThemeName })
              )
            }
          ></div>
        ))}
      </div>
      <div className="flex flex-col p-2">
        <HeaderThemeSwitcher />
      </div>
    </div>
  );
};

export default HeaderSettingsMenu;
