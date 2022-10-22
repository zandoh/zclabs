import type { HTMLAttributes } from "react";
import PageBody from "../PageBody";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Projects({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <PageBody {...rest}>
      <h1 className="text-white">Projects</h1>
    </PageBody>
  );
}
