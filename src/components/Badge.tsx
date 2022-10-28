import type { HTMLAttributes } from "react";

type BadgeVariant =
  | "default"
  | "dark"
  | "red"
  | "green"
  | "yellow"
  | "indigo"
  | "purple"
  | "pink";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const BadgeClassColorMap: Record<BadgeVariant, string> = {
  default: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",
  dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",
  green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
  yellow:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",
  indigo:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900",
  purple:
    "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900",
  pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900",
};

const Badge = ({ variant = "default", ...props }: BadgeProps) => {
  const baseClasses = "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded";
  const colorClasses = BadgeClassColorMap[variant];

  return <span className={`${baseClasses} ${colorClasses}`} {...props}></span>;
};

export default Badge;