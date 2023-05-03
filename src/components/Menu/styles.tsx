import styled from "styled-components";

type MenuProps = {
  isOpened: boolean;
};

export const MenuOverlay = styled.div<MenuProps>`
  position: fixed;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.6px);
  -webkit-backdrop-filter: blur(11.6px);

  backdrop-filter: ${({ isOpened }) => (isOpened ? "blur(11.6px)" : "blur(0)")};
  -webkit-backdrop-filter: ${({ isOpened }) =>
    isOpened ? "blur(11.6px)" : "blur(0)"};

  transition: 1s;

  top: 0;
  left: 0;
  overflow: hidden;
  background: ${({ isOpened }) =>
    isOpened ? "rgb(0, 0, 0, 0.5)" : "rgb(0, 0, 0, 0)"};
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
`;

export const MenuContainer = styled.div<MenuProps>`
  position: fixed;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  top: 0;
  left: 30%;
  transform: ${({ isOpened }) =>
    isOpened ? "translateX(0%)" : "translateX(100%)"};

  transition: 0.5s;
  transition-timing-function: ease-in-out;

  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.complementary};

  > ul {
    margin: 5rem 0 0 1.5rem;
  }
`;
