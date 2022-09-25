import type { HTMLAttributes, RefObject } from "react";
import type { ThemeKey } from "../../themes";
import subThemes, { SubThemeAttributes } from "../../themes/subThemes";
import { handleKeyPress, KeyboardKeyCode } from "../utils/handleKeyPress";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";

interface HeaderSettingsMenuProps extends HTMLAttributes<HTMLDivElement> {
  setTheme: React.Dispatch<React.SetStateAction<ThemeKey>>;
  theme: ThemeKey;
}

const HeaderSettingsMenu = ({
  setTheme,
  theme,
  ...rest
}: HeaderSettingsMenuProps) => {
  const changeSubTheme = (subTheme: SubThemeAttributes) => {
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
      className="absolute right-0 z-10 mt-8 w-36 origin-top-right rounded-md border border-[color:var(--zc-color-theme-lighter)] bg-[color:var(--zc-color-theme)] shadow-2xl"
      role="menu"
      {...rest}
    >
      <div className="from-400 flex flex-row flex-wrap justify-center p-2">
        {Object.entries(subThemes).map(([subThemeName, subTheme]) => (
          <div
            className={`mx-4 my-2 h-6 w-6 cursor-pointer rounded-xl bg-gradient-to-r ${subTheme.display}`}
            role="menuitem"
            title={subThemeName}
            aria-label={subThemeName}
            key={subThemeName}
            tabIndex={0}
            onClick={() => changeSubTheme(subTheme)}
            onKeyDown={(e) =>
              handleKeyPress(e, KeyboardKeyCode.ENTER, () =>
                changeSubTheme(subTheme)
              )
            }
          ></div>
        ))}
      </div>
      <div className="mb-2 flex flex-col p-2">
        <HeaderThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default HeaderSettingsMenu;
