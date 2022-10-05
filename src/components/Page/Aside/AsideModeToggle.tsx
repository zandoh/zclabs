import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { applyTheme, getDefaultTheme } from "../../../themes/utils";

const AsideModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  // Set intial state based off of browser preference.
  useEffect(() => {
    const browserModePref = getDefaultTheme();

    applyTheme(browserModePref);
    setEnabled(browserModePref === "dark" ? true : false);
  }, []);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add("dark");
      applyTheme("dark");
    } else {
      document.body.classList.remove("dark");
      applyTheme("light");
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative mt-8 inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default AsideModeToggle;
