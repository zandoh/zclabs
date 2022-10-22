import type { HTMLAttributes } from "react";
import PageBody from "../PageBody";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function About({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <PageBody {...rest}>
      <h1 className="text-white">About</h1>
    </PageBody>
  );
}
