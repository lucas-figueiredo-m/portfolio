import React, { useCallback, useState } from "react";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Hamburger } from "@components/Hamburger";
import { Menu } from "@components/Menu";
import { NavigationLink } from "@components/NavigationLink";

export const Header: React.FC = () => {
  const isSmallScreen = useMediaQuery(750);

  const [isOpened, setOpened] = useState(false);

  const onOpenDrawer = () => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }

    setOpened(true);
  };

  const onCloseDrawer = () => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "auto";
    }

    setOpened(false);
  };

  const onHamburguerPress = useCallback(() => {
    if (isOpened) return onCloseDrawer();

    return onOpenDrawer();
  }, [isOpened]);

  return (
    <header
      className={`w-full flex items-center h-16 border-b border-[#73140B] sticky top-0 bg-black/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[11.6px] z-[250] ${
        isSmallScreen ? "justify-end" : "justify-center"
      }`}
    >
      {isSmallScreen ? (
        <>
          <Hamburger isOpened={isOpened} onPress={onHamburguerPress} />
          <Menu onOverlayPress={onCloseDrawer} isOpened={isOpened} />
        </>
      ) : (
        <ul className="flex gap-8 items-center">
          <NavigationLink url="/" label="Home" />
          <NavigationLink url="/work" label="Work" includes />
          <NavigationLink url="/projects" label="Projects" includes />
        </ul>
      )}
    </header>
  );
};
