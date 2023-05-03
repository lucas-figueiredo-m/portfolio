import { lighten } from "polished";
import styled from "styled-components";

type NavigationLinkProps = {
  isActive: boolean;
};

export const NavigationLinkContainer = styled.li<NavigationLinkProps>`
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
