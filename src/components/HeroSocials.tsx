"use client";

import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

const links = [
  { href: "https://github.com/Sardoralgoritm", label: "GitHub", icon: <FaGithub size={18} /> },
  { href: "https://linkedin.com/in/sardorbekk", label: "LinkedIn", icon: <FaLinkedin size={18} /> },
  { href: "https://t.me/saminov_dev", label: "Telegram", icon: <FaTelegram size={18} /> },
  { href: "https://leetcode.com/u/ilxamovic", label: "LeetCode", icon: <SiLeetcode size={18} /> },
  { href: "mailto:sardorsaminov5@gmail.com", label: "Email", icon: <MdOutlineEmail size={20} /> },
];

export function HeroSocials() {
  return (
    <div className="flex gap-3 mt-16">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={link.label}
          className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors duration-200"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
