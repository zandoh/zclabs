import type { KeyboardEvent } from "react";

export enum KeyboardKeyCode {
  ENTER = "Enter",
}

export const handleKeyPress = (
  event: KeyboardEvent<HTMLElement>,
  targetKey: KeyboardKeyCode,
  callback: Function
): void => {
  if (event.key === targetKey) {
    callback();
  }
};
