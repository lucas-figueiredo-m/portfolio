import React from "react";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-20">
      <div className="mx-auto max-w-6xl border-t border-border px-6 py-8 flex items-center justify-between">
        <p className="text-sm text-text-tertiary">
          &copy; 2026 Lucas Figueiredo
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/lucas-figueiredo-m/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <IoLogoLinkedin className="w-5 h-5" />
          </Link>

          <Link
            href="https://github.com/lucas-figueiredo-m"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <IoLogoGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
