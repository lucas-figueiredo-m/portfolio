import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  > svg {
    width: 4rem;
    height: 4rem;
    stroke: ${({ color }) => color};
  }

  > h2 {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;
