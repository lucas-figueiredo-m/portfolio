import Image from "next/image";
import Link from "next/link";
import { lighten } from "polished";
import styled from "styled-components";

export const BlogCardContainer = styled(Link)`
  display: flex;
  width: 100%;
  height: 20rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.white};

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  &:hover {
    > div.overlay {
      opacity: 0.4;
    }
    transform: scale(1.07);
  }

  > div.image {
    display: flex;
    width: 100%;
    height: 100%;
  }

  > div.overlay {
    background: ${({ theme }) => theme.colors.black};
    opacity: 0.6;
    transition: 0.5s;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    padding: 1.5rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

type BlogCardImageProps = {
  imgSrc: string;
};

export const BlogCardImage = styled.div<BlogCardImageProps>`
  width: 100%;
  height: 30rem;
  background: url(${({ imgSrc }) => imgSrc});
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  src: ${({ src }) => `url(${src})`};
  width: 40rem;
  flex: 1;
`;
