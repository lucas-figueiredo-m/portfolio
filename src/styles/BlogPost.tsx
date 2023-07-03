import styled from "styled-components";

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const BlogPostContent = styled.div`
  margin: 3rem 0 3rem 0;

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1.3rem;
    text-align: justify;
    /* letter-spacing: 0rem; */
    line-height: 2.5rem;
  }
`;
