import { RefObject, useEffect } from "react";

/**
 * @param ref Base element to watch for click outside
 * @param callback Function to be called when an outside click occurs
 */
export const useOnClickOutside = (ref: RefObject<any>, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
};
