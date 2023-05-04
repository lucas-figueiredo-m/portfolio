import { darken, lighten } from "polished";
import styled from "styled-components";

type WorkContainerProps = {
  imgUrl: string;
};

export const WorkItemContainer = styled.section<WorkContainerProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }

      > div.overlay {
        opacity: 0.2;
      }

      h1 {
        color: ${({ theme }) => lighten(0.3, theme.colors.support)};
      }

      h2 {
        color: ${({ theme }) => lighten(0.3, theme.colors.support)};
      }
    }

    > button a {
      color: ${({ theme }) => theme.colors.support};
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;
    cursor: pointer;

    a {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${({ imgUrl }) => imgUrl});
    background-position: right 0 bottom -1.2rem;
    /* object-position: 20% 70%; */
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
    border-radius: 0.5rem;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.black};
      opacity: 0.4;
      transition: 0.5s;
      border-radius: 0.5rem;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -8rem;
      transition: 0.5s;
      width: fit-content;
    }

    h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.5rem;
      text-shadow: -4px 5px 22px #11172b;
      transition: 0.5s;
    }

    h2 {
      color: ${({ theme }) => `${darken(0.2, theme.colors.white)}`};
      font-size: 2rem;
      font-weight: 300;
      text-shadow: -4px 5px 22px #11172b;
      text-transform: capitalize;
      transition: 0.5s;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0 3rem 3rem 0;
    }

    > section > div.text {
      text-align: right;
      right: 0;
      left: -8rem;
    }

    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }
  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > button {
        margin: 0;
      }

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    > section > div.text {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
`;
