import { useKeyboard } from "@react-aria/interactions";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import useDarkMode from "../../hooks/useDarkMode";

type IconName = "moon" | "sunny";

const IconMap: Record<IconName, ReactNode> = {
  // https://icon-sets.iconify.design/ion/moon/
  moon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480Z"
      />
    </svg>
  ),
  // https://icon-sets.iconify.design/ion/sunny/
  sunny: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22Zm0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22Zm113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44ZM108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45ZM464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44Zm-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44Zm307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56ZM142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55ZM256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102Z"
      />
    </svg>
  ),
};

const ThemeToggle = () => {
  const { isDarkMode, toggle } = useDarkMode();
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => e.code === "Enter" && toggleTheme(),
  });

  const toggleTheme = () => {
    isDarkMode ? document.body.classList.remove("dark") : document.body.classList.add("dark");
    toggle();
  };

  useEffect(() => {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }, []);

  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <div
        {...keyboardProps}
        className="flex w-9 cursor-pointer select-none flex-col items-center fill-app-onyx text-app-onyx dark:fill-app-antiFlashWhite dark:text-app-antiFlashWhite"
        onClick={toggleTheme}
        tabIndex={0}
      >
        {IconMap[isDarkMode ? "moon" : "sunny"]}
      </div>
    </motion.div>
  );
};

export default ThemeToggle;
