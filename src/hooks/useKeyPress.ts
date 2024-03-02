import { useEffect } from "react";

export const useKeyPress = (keyCodes: KeyboardEvent["code"][], callback: () => void) => {
  const handler = ({ code }: KeyboardEvent) => {
    if (keyCodes.includes(code)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
};
