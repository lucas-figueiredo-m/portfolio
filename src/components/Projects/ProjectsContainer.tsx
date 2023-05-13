import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: grid;
    gap: 1.5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    width: 100%;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
