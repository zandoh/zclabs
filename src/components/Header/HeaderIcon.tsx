import type { SVGAttributes } from "react";

const HeaderIcon = ({ children, ...rest }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      className="h-6 w-6 cursor-pointer whitespace-nowrap fill-gray-500 hover:fill-gray-900 hover:transition-colors"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default HeaderIcon;
