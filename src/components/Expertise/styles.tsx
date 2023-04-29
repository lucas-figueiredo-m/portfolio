import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
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
    font-weight: 500;
    transition: 0.5s;
  }

  svg {
    width: 4rem;
    height: 4rem;
    fill: ${({ theme }) => theme.colors.white};
    transition: 0.5s;

    &:hover {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }

  svg:hover ~ h2 {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
