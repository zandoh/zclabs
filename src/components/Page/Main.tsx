import type { HTMLAttributes } from "react";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Main({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main className="" {...rest}>
      <h1>Main</h1>
    </main>
  );
}
