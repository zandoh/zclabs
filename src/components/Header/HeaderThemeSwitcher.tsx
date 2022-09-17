import type { ChangeEvent, HTMLAttributes } from "react";
import type { ThemeKey } from "../../themes";

interface HeaderThemeSwitcherProps extends HTMLAttributes<HTMLLabelElement> {
  setTheme: React.Dispatch<React.SetStateAction<ThemeKey>>;
  theme: ThemeKey;
}

const HeaderThemeSwitcher = ({
  setTheme,
  theme,
  ...rest
}: HeaderThemeSwitcherProps) => {
  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <label
      htmlFor="toggleMode"
      className="relative inline-flex h-6 w-12 cursor-pointer self-center rounded-lg px-4 py-2"
      tabIndex={0}
      {...rest}
    >
      <input
        type="checkbox"
        id="toggleMode"
        className="peer sr-only"
        tabIndex={1}
        onChange={toggleTheme}
      />
      <span
        className="absolute inset-0 rounded-full bg-blue-400 transition peer-checked:bg-blue-600"
        tabIndex={-1}
      ></span>
      <span
        className="absolute inset-0 m-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-6"
        tabIndex={-1}
      ></span>
    </label>
  );
};

export default HeaderThemeSwitcher;
