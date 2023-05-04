import styled from "styled-components";

export const WorkDetailsContainer = styled.div`
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

export const WorkDetailContent = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 1.5rem;

  > h1 {
    font-size: 3.5rem;
    font-weight: 600;
  }

  > h2 {
    font-size: 2rem;
  }
`;
