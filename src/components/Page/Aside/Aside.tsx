import type { HTMLAttributes } from "react";
import AsideCopyright from "./AsideCopyright";
import AsideIcons from "./AsideIcons";
import AsideImage from "./AsideImage";
import AsideModeToggle from "./AsideModeToggle";
import AsideTitles from "./AsideTitles";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Aside({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <aside
      className="float-left inline-block h-[80vh] min-h-[auto] w-full max-w-sm overflow-auto rounded-tl-[32px] rounded-bl-[32px] bg-gradient-to-r from-[color:#21e1ae] via-[color:#09aeea] to-[color:#09aeea] px-[30px] pt-[70px] pb-[45px] text-center dark:bg-[color:var(--zc-color-base)] dark:from-transparent dark:via-transparent dark:to-transparent"
      {...rest}
    >
      <AsideImage />
      <AsideTitles />
      <AsideIcons />
      <AsideModeToggle />
      <AsideCopyright />
    </aside>
  );
}
