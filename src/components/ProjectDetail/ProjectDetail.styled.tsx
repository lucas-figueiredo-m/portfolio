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
