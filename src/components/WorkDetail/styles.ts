import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 30rem; */
  display: flex;
  gap: 4rem;

  > div.image {
    flex: 1;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    > h2 {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 600;
    }

    ul {
      list-style: inside;
      text-align: justify;
    }

    li {
      font-size: 1.3rem;
    }
  }

  :nth-child(odd) {
    flex-direction: row-reverse;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    line-height: 3rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    height: 60rem;

    :nth-child(odd) {
      flex-direction: column;
    }

    > div.image {
      width: 100%;
      height: 30rem;
    }

    > div {
      > h2 {
        font-size: 1.5rem;
      }

      li {
        font-size: 1.2rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }
`;
