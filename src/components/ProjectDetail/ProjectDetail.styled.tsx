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
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
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
`;

export const ColumnPackages = styled.div`
  ul {
    column-count: 2;
    margin-top: 1.5rem;
  }

  li {
    padding-left: 1rem;
    font-size: 1.5rem;
  }

  li:before {
    content: "\u2705";
    padding-right: 1rem;
  }
`;

export const BagdesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;
`;
