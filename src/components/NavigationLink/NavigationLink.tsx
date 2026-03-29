import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type NavLinkProps = {
  url: string;
  label: string;
  includes?: boolean;
  onClick?: () => void;
};

export const NavigationLink: React.FC<NavLinkProps> = ({
  url,
  label,
  includes = false,
  onClick,
}) => {
  const router = useRouter();

  const isActive = includes
    ? router.pathname.includes(url)
    : router.pathname === url;

  return (
    <li className="list-none">
      <Link
        href={url}
        onClick={onClick}
        className={`
          relative text-sm font-medium tracking-wider uppercase
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
          ${isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"}
        `}
      >
        {label}
        <span
          className={`
            absolute -bottom-1 left-0 h-0.5 bg-accent
            transition-all duration-200
            motion-reduce:transition-none
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
          aria-hidden="true"
        />
      </Link>
    </li>
  );
};
