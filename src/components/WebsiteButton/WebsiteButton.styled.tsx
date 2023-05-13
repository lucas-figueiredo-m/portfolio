import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 10rem;
  background: black;
  border: 1.1px solid rgb(163, 163, 163);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;

  transition: 0.5s;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }

  div {
    display: flex;
    flex: 1;
  }

  svg {
    width: 2.2rem;
    height: 2.2rem;
    /* margin: 0.5rem; */
    fill: white;
    stroke: white;
  }

  section {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    margin-left: 0.5rem;
  }

  h2 {
    font-size: 0.75rem;
    font-weight: 500;
    color: white;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin: 0;
    padding: 0;
  }
`;
