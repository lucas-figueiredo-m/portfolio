import { lighten } from "polished";
import styled from "styled-components";

type NavigationLinkProps = {
  isActive: boolean;
};

export const NavigationLinkContainer = styled.li<NavigationLinkProps>`
  > div {
    transition: all 0.5s ease-in-out;
    margin-top: 2rem;
    &:hover {
      transform: scale(1.05);
    }
  }

  a {
    text-transform: uppercase;
    color: ${({ theme: { colors }, isActive }) =>
      isActive ? colors.support : colors.text};
    transition: 0.5s;

    &:hover {
      color: ${({ theme: { colors }, isActive }) =>
        isActive ? lighten(0.3, colors.support) : lighten(0.3, colors.text)};
    }

    @media (max-width: 700px) {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;
