import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  > section {
    display: flex;
    flex-direction: row;
    width: "100%";
    gap: 2rem;
    align-items: center;
    margin-top: 5rem;

    > div {
      display: flex;
      flex-direction: row;
      flex: 1;
      border-bottom: 2px solid ${({ theme }) => theme.colors.support};
    }

    > h2 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.8rem;
    }

    @media (max-width: 450px) {
      > h2 {
        font-size: 1.3rem;
      }
    }
  }
`;
export const ExpertiseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type ExpertiseItemContainerProps = {
  hoverColor: string;
};

export const ExpertiseItemContainer = styled.div<ExpertiseItemContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  h2 {
    margin-top: 0.8rem;
    font-weight: 500;
    transition: 0.5s;
    font-size: 2rem;
  }

  > svg {
    width: 4rem;
    height: 4rem;
    fill: ${({ theme }) => theme.colors.white};
    transition: 0.5s;

    &:hover {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }

  @media (max-width: 700px) {
    svg {
      width: 3rem;
      height: 3rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }

  svg:hover ~ h2 {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
