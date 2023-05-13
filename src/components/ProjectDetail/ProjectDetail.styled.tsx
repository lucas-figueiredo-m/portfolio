import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }
`;

export const BannerContainer = styled.section`
  > h1 {
    margin: 0rem 0 4rem 0;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 700px) {
    > h1 {
      font-size: 1.8rem;
    }
  }
`;

type BannerContainerProps = {
  imgSrc: string;
};

export const BannerImage = styled.div<BannerContainerProps>`
  width: 100%;
  height: 30rem;
  background: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  background-position-y: center;
  mask-image: linear-gradient(black 30%, transparent 90%);

  @media (max-width: 1000px) {
    height: 20rem;
  }
  @media (max-width: 700px) {
    height: 10rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const FrameworkContentContainer = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    gap: 1rem;

    div {
      gap: 1rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;
export const LanguageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  svg {
    width: 3rem;
    height: 3rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    gap: 1rem;

    div {
      gap: 1rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const ProjectDetailContent = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 5rem;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    margin-top: 1.5rem;
  }

  > ol > li {
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
    }

    p {
      font-size: 1.1rem;
      margin-top: 1.1rem;
    }
  }
`;

export const ColumnPackages = styled.div`
  ul {
    column-count: 2;
    margin-top: 1.5rem;
  }

  li {
    font-size: 1.5rem;
  }

  li:before {
    content: "\u2705";
    padding-right: 1rem;
  }

  @media (max-width: 700px) {
    ul {
      column-count: 1;
    }

    li {
      font-size: 1rem;
    }

    li:before {
      padding-right: 0.5rem;
    }
  }
`;

export const BagdesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FutureReleasesContent = styled.div`
  ul {
    list-style: inside;
  }

  li {
    font-size: 1.3rem;
  }

  @media (max-width: 700px) {
    li {
      font-size: 1rem;
    }
  }
`;
