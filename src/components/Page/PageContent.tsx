import type { HTMLAttributes } from "react";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function PageContent({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="relative mx-auto my-[10vh] flex min-h-[80vh] w-full max-w-screen-xl rounded-[32px] bg-[color:var(--zc-color-base)] p-0 shadow-2xl"
      {...rest}
    >
      {children}
    </div>
  );
}
