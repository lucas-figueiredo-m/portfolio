import styled from "styled-components";

type StyledBurguerProps = {
  isOpened: boolean;
};

export const StyledBurguer = styled.button<StyledBurguerProps>`
  display: flex;
  flex-direction: column;
  width: 2.1rem;
  height: 2rem;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.25rem;
  margin-right: 1rem;
  border: none;
  background: transparent;
  z-index: 50;

  div {
    width: 1.9rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.25rem;
    position: relative;
    transform-origin: 100%;

    transition: all 0.5s ease-in-out;

    :first-child {
      transform: ${({ isOpened }) =>
        isOpened ? "rotate(-45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      transform: ${({ isOpened }) =>
        isOpened ? "translateX(2rem)" : "translateX(0)"};
      opacity: ${({ isOpened }) => (isOpened ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ isOpened }) =>
        isOpened ? "rotate(45deg)" : "rotate(0)"};
    }
  }
`;
