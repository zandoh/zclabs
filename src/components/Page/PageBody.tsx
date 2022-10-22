import type { HTMLAttributes } from "react";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function PageBody({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className="w-full rounded-tr-[32px] rounded-br-[32px] bg-white dark:bg-black"
      {...rest}
    >
      {children}
    </main>
  );
}
