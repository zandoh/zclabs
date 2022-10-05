import { useEffect, useRef, useState } from "react";
import type { ThemeKey } from "../../themes";
import { getDefaultTheme, applyTheme } from "../../themes/utils";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Background() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeKey>(getDefaultTheme());

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!prefersReducedMotion.matches) {
      window.addEventListener("mousemove", (event) => {
        if (!bgRef || !bgRef.current) {
          return;
        }

        const movementStrength = 23;
        const screenWidth = document.body.clientWidth;
        const pageX = event.pageX - screenWidth / 2;
        const pageY = event.pageY - screenWidth / 2;
        const styleHeight = movementStrength / screenWidth;
        const styleWidth = movementStrength / screenWidth;
        const styleX = styleWidth * pageX * -1;
        const styleY = styleHeight * pageY * -1;

        bgRef.current.style.backgroundPositionX = `calc(5% + ${styleX}px)`;
        bgRef.current.style.backgroundPositionY = `calc(5% + ${styleY}px)`;
      });
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div
      ref={bgRef}
      className="absolute top-0 z-[-1] h-screen w-screen bg-[url('/background.png')]"
    ></div>
  );
}
