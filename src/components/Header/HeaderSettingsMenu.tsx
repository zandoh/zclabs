import type { HTMLAttributes } from "react";
import { handleKeyPress, KeyboardKeyCode } from "../hooks/useKeyPress";

const HeaderSettingsMenu = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const themes = {
    "Miami Vice": "bg-gradient-to-r from-cyan-400 via-cyan-300 to-fuchsia-400",
    Hyper: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    Beachside: "bg-gradient-to-r from-yellow-200 via-green-200 to-green-500",
    Hawaii: "bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300",
    Rasta: "bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600",
    Powerpuff: "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400",
  };

  const changeTheme = (theme: string) => {
    console.log("new theme is ", theme);
  };

  return (
    <div
      className="absolute right-0 z-10 mt-8 w-36 origin-top-right rounded-md border border-gray-100 bg-white shadow-2xl"
      role="menu"
    >
      <div className="flex flex-row flex-wrap p-2">
        {Object.entries(themes).map(([themeName, theme]) => (
          <a
            href="#"
            className="flex-1 rounded-lg px-4 py-2"
            role="menuitem"
            title={themeName}
            aria-label={themeName}
            key={themeName}
            onClick={() => changeTheme(theme)}
            onKeyDown={(e) =>
              handleKeyPress(e, KeyboardKeyCode.ENTER, () => changeTheme(theme))
            }
          >
            <div className={`h-6 w-6 rounded-xl ${theme}`}></div>
          </a>
        ))}
      </div>
      <div className="flex flex-col p-2">
        <label
          htmlFor="toggleMode"
          className="relative inline-flex h-8 w-16 cursor-pointer self-center rounded-lg px-4 py-2"
        >
          <input type="checkbox" id="toggleMode" className="peer sr-only" />
          <span className="absolute inset-0 rounded-full bg-blue-400 transition peer-checked:bg-blue-600"></span>
          <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-8"></span>
        </label>
      </div>
    </div>
  );
};

export default HeaderSettingsMenu;
