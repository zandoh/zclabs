import type { HTMLAttributes } from "react";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Main({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      id="swup"
      className="w-full rounded-tr-[32px] rounded-br-[32px] bg-white dark:bg-black"
      {...rest}
    >
      <h1>Main</h1>
    </main>
  );
}
