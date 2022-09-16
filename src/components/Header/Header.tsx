import HeaderSettingsIcon from "./HeaderSettingsIcon";
import HeaderSocialIcon from "./HeaderSocialIcon";

const Header = () => {
  return (
    <div className="relative bg-white">
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
        <hr className="h-1 rounded-sm border border-solid border-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-fuchsia-400" />
      </div>
    </div>
  );
};

export default Header;
