import { RefObject, useEffect } from "react";

/**
 * @param ref Base element to watch for click outside
 * @param callback Function to be called when an outside click occurs
 */
export const useOnClickOutside = (ref: RefObject<any>, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      console.log("clicked! ", ref);
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("calling callback");
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
};
