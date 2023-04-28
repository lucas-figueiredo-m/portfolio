import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > div {
    flex: 3;
  }

  @media (max-width: 1450px) {
    /* width: 25rem; */

    > div {
      /* flex: 1; */
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  src: ${({ src }) => `url(${src})`};
  width: 40rem;
  flex: 1;
  mask-image: linear-gradient(black 80%, transparent 90%);

  @media (max-width: 1450px) {
    width: 35rem;
  }

  @media (max-width: 1000px) {
    width: 30rem;
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.support};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text};
    text-align: right;
    margin-top: 3rem;
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;
