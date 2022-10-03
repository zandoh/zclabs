import type { HTMLAttributes } from "react";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Aside({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className="" {...rest}>
      <h1>Aside</h1>
    </aside>
  );
}
