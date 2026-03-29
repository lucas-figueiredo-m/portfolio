import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useScrollDirection } from "@hooks/useScrollDirection";
import { Hamburger } from "@components/Hamburger";
import { Menu } from "@components/Menu";
import { NavigationLink } from "@components/NavigationLink";

export const Header: React.FC = () => {
  const isSmallScreen = useMediaQuery(750);
  const scrollDirection = useScrollDirection();

  const [isOpened, setOpened] = useState(false);

  const onOpenDrawer = () => {
    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
    setOpened(true);
  };

  const onCloseDrawer = () => {
    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "auto";
    }
    setOpened(false);
  };

  const onHamburgerPress = useCallback(() => {
    if (isOpened) return onCloseDrawer();
    return onOpenDrawer();
  }, [isOpened]);

  const isHidden = scrollDirection === "down" && !isOpened;

  return (
    <header
      className={`
        w-full sticky top-0 z-50
        bg-background/80 backdrop-blur-xl
        border-b border-border-subtle
        transition-transform duration-300 ease-in-out
        motion-reduce:transition-none
        ${isHidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="mx-auto max-w-6xl h-16 flex items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-text-primary hover:text-text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Lucas Figueiredo
        </Link>

        {isSmallScreen ? (
          <>
            <Hamburger isOpened={isOpened} onPress={onHamburgerPress} />
            <Menu onOverlayPress={onCloseDrawer} isOpened={isOpened} />
          </>
        ) : (
          <nav aria-label="Main navigation">
            <ul className="flex gap-8 items-center">
              <NavigationLink url="/" label="Home" />
              <NavigationLink url="/work" label="Work" includes />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
