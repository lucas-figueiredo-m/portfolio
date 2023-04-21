import React from "react";
import { Container } from "./styles";
import { NavLink } from "./NavLink";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <ul>
        <NavLink url="/" label="Home" />
        <NavLink url="/portfolio" label="Portfolio" />
        <NavLink url="/projects" label="Projects" />
        <NavLink url="/blog" label="Blog" />
        <NavLink url="/courses" label="Courses" />
      </ul>
    </Container>
  );
};
