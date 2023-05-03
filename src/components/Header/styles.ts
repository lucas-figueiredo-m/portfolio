import { lighten } from "polished";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";

type ContainerProps = {
  isSmallScreen: boolean;
};

export const Container = styled.header<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ isSmallScreen }) =>
    isSmallScreen ? "flex-end" : "center"};
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

  > ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const MenuIcon = styled(IoMenu)`
  width: 10px;
  height: 10px;
  stroke: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
`;
