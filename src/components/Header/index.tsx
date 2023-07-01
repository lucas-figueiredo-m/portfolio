import React, { useCallback, useState } from "react";
import { Container } from "./styles";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Hamburguer } from "@components/Hamburguer";
import { Menu } from "@components/Menu";
import { NavigationLink } from "@components/NavigationLink";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
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
    <Container isSmallScreen={isSmallScreen}>
      {isSmallScreen ? (
        <>
          <Hamburguer isOpened={isOpened} onPress={onHamburguerPress} />
          <Menu onOverlayPress={onCloseDrawer} isOpened={isOpened} />
        </>
      ) : (
        <ul>
          <NavigationLink url="/" label="Home" />
          <NavigationLink url="/work" label="Work" includes />
          <NavigationLink url="/projects" label="Projects" includes />
          <NavigationLink url="/blog" label="Blog" includes />
          {/* <NavigationLink url="/courses" label="Courses" includes /> */}
        </ul>
      )}
    </Container>
  );
};
