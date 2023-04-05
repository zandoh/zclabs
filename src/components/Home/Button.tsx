import { motion } from "framer-motion";
import { ReactNode } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io/index";

type SupportedIcon = "logo-github" | "logo-linkedin";

const IconMap: Record<SupportedIcon, ReactNode> = {
  "logo-github": <IoLogoGithub className="h-full w-full" />,
  "logo-linkedin": <IoLogoLinkedin className="h-full w-full" />,
};

const Button = ({ href, iconName, text }: { href: string; iconName: SupportedIcon; text: string }) => (
  <motion.a
    className="flex items-center gap-2 rounded border border-solid px-4 py-3 text-base font-bold hover:underline focus:underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="w-9 no-underline">{IconMap[iconName]}</div>
    {text}
  </motion.a>
);

export default Button;
