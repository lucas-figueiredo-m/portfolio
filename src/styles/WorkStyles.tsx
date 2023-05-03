import styled from "styled-components";

export const WorkContainer = styled.div`
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

export const WorkContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin: 5rem 0 5rem 0;
`;
