import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1pm solid ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.6px);
  -webkit-backdrop-filter: blur(11.6px);
  /* border: 1px solid rgba(255, 255, 255, 0.3); */

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

type NavLinkProps = {
  isActive: boolean;
};

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${({ theme: { colors }, isActive }) =>
      isActive ? colors.support : colors.text};
    transition: 0.5s;

    &:hover {
      color: ${({ theme: { colors }, isActive }) =>
        isActive ? lighten(0.3, colors.support) : lighten(0.3, colors.text)};
    }
  }
`;
