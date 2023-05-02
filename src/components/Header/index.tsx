import React from "react";
import { Container, MenuIcon } from "./styles";
import { NavLink } from "./NavLink";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { slide as Menu } from "react-burger-menu";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const isSmallScreen = useMediaQuery(750);

  return (
    <Container>
      {isSmallScreen ? (
        <Menu right customBurgerIcon={<MenuIcon />}>
          <ul>
            <NavLink url="/" label="Home" />
            <NavLink url="/work" label="Work" />
            <NavLink url="/projects" label="Projects" />
            <NavLink url="/blog" label="Blog" />
            <NavLink url="/courses" label="Courses" />
          </ul>
        </Menu>
      ) : (
        <>
          <ul>
            <NavLink url="/" label="Home" />
            <NavLink url="/work" label="Work" />
            <NavLink url="/projects" label="Projects" />
            <NavLink url="/blog" label="Blog" />
            <NavLink url="/courses" label="Courses" />
          </ul>
        </>
      )}
    </Container>
  );
};
