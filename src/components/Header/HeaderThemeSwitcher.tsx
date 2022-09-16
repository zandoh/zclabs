import type { HTMLAttributes } from "react";

const HeaderThemeSwitcher = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <label
      htmlFor="toggleMode"
      className="relative inline-flex h-6 w-12 cursor-pointer self-center rounded-lg px-4 py-2"
      tabIndex={0}
    >
      <input type="checkbox" id="toggleMode" className="peer sr-only" />
      <span className="absolute inset-0 rounded-full bg-blue-400 transition peer-checked:bg-blue-600"></span>
      <span className="absolute inset-0 m-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-6"></span>
    </label>
  );
};

export default HeaderThemeSwitcher;
