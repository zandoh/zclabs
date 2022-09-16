import type { HTMLAttributes } from "react";
import subThemes, { SubThemeAttributes } from "../../themes/subThemes";
import { handleKeyPress, KeyboardKeyCode } from "../utils/handleKeyPress";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";

const HeaderSettingsMenu = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
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
      className="absolute right-0 z-10 mt-8 w-36 origin-top-right rounded-md border border-[color:var(--app-border-primary)] bg-[color:var(--app-bg-primary)] shadow-2xl"
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
      <div className="flex flex-col p-2">
        <HeaderThemeSwitcher />
      </div>
    </div>
  );
};

export default HeaderSettingsMenu;
