import { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../../themes";
import { applyTheme } from "../../themes/utils";
import HeaderSettingsIcon from "./HeaderSettingsIcon";
import HeaderSocialIcon from "./HeaderSocialIcon";

// Why is this not a const? -- https://github.com/withastro/astro/issues/4220
export default function Header() {
  // @TODO somehow this is an invalid hook call -- probably SRR nature of astro
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  // @TODO same ^
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="relative bg-white dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">zclabs icon</span>
              <img className="h-8 w-auto sm:h-10" src="/saturn.svg" alt="" />
            </a>
          </div>
          <div className="xs:hidden flex flex-1 items-center justify-end lg:w-0">
            <HeaderSocialIcon
              href="mailto:spamdoh9@gmail.com?subject=Email from zclabs.io"
              label="Email"
              svgType="mail"
            />
            <HeaderSocialIcon
              href="https://linkedin.com/in/zrclark/"
              label="LinkedIn"
              svgType="linkedin"
            />
            <HeaderSocialIcon
              href="https://github.com/zandoh"
              label="GitHub"
              svgType="github"
            />
            <HeaderSettingsIcon title="Settings" />
          </div>
        </div>
        <hr className="h-1 rounded-sm border border-solid border-transparent bg-gradient-to-r" />
      </div>
    </div>
  );
}
