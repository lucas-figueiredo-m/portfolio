import styled from "styled-components";

type ProjectItemContainerProps = {
  imgUrl: string;
};

export const ProjectItemContainer = styled.div<ProjectItemContainerProps>`
  a {
    display: flex;
    position: relative;
    width: 100%;
    height: 20rem;
    background: url(${({ imgUrl }) => imgUrl}) no-repeat center;
    padding: 1.5rem;
    background-size: cover;
    border-radius: 1rem;
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0);
    box-sizing: border-box;
    background-clip: padding-box;

    &:hover {
      border-color: ${({ theme }) => theme.colors.support};

      > div.overlay {
        opacity: 0.2;
      }
    }

    > div.overlay {
      background: ${({ theme }) => theme.colors.black};
      opacity: 0.6;
      transition: 0.5s;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }

    > section {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      width: 100%;
      height: 100%;

      h1 {
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
      }

      h2 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
