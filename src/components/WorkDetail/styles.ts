import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  gap: 2rem;

  > div {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
  }

  :nth-child(odd) {
    flex-direction: row-reverse;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    line-height: 3rem;
  }
`;
