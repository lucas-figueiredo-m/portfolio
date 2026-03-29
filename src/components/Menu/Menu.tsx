import React from "react";
import Link from "next/link";
import { NavigationLink } from "@components/NavigationLink";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

type MenuProps = {
  isOpened: boolean;
  onOverlayPress: () => void;
};

export const Menu: React.FC<MenuProps> = ({ isOpened, onOverlayPress }) => (
  <div
    onClick={onOverlayPress}
    role="presentation"
    className={`fixed inset-0 z-40 transition-all duration-300 motion-reduce:transition-none ${
      isOpened
        ? "bg-black/60 backdrop-blur-sm visible"
        : "bg-transparent backdrop-blur-0 invisible"
    }`}
  >
    <nav
      onClick={(e) => e.stopPropagation()}
      aria-label="Mobile navigation"
      className={`fixed top-0 right-0 w-[70%] max-w-xs h-full bg-surface border-l border-border flex flex-col overscroll-contain transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
        isOpened ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="mt-24 px-8 flex flex-col gap-8">
        <NavigationLink url="/" label="Home" onClick={onOverlayPress} />
        <NavigationLink url="/work" label="Work" includes onClick={onOverlayPress} />
      </ul>

      <div className="mt-auto px-8 pb-8 flex items-center gap-5">
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
    </nav>
  </div>
);
