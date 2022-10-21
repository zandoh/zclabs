import type { HTMLAttributes } from "react";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Page({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="flex h-full min-h-full w-full overflow-hidden px-[100px]"
      {...rest}
    >
      {children}
    </div>
  );
}
