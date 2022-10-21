import type { HTMLAttributes } from "react";
import {
  GoHome,
  GoPerson,
  GoMortarBoard,
  GoProject,
  GoBook,
} from "react-icons/go";

// Why is this not an arrow function? -- https://github.com/withastro/astro/issues/4220
export default function Menu({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <nav
      className="my-[10vh] ml-4 flex h-min w-16 flex-col items-center rounded-[32px] bg-white p-4 dark:bg-[color:var(--zc-color-base)]"
      {...rest}
    >
      <a href="/" className="mb-4">
        <span className="sr-only">Home</span>
        <GoHome className="h-auto w-8 dark:text-white dark:hover:text-[color:var(--tw-gradient-to)]" />
      </a>
      <a href="/about" className="mb-4">
        <span className="sr-only">About Me</span>
        <GoPerson className="h-auto w-8" />
      </a>
      <a href="/resume" className="mb-4">
        <span className="sr-only">Resume</span>
        <GoMortarBoard className="h-auto w-8" />
      </a>
      <a href="/projects" className="mb-4">
        <span className="sr-only">Projects</span>
        <GoProject className="h-auto w-8" />
      </a>
      <a href="/blog">
        <span className="sr-only">Blog</span>
        <GoBook className="h-auto w-8" />
      </a>
    </nav>
  );
}
