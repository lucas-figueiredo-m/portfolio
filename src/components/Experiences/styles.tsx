import styled from "styled-components";

export const ExperienceContainer = styled.section`
  width: 100%;
  padding-bottom: 8rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.complementary};

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    @media (max-width: 1000px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ExperienceItemContainer = styled.div`
  display: flex;
  flex: 1;

  > div {
    background: ${({ theme }) => theme.colors.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.colors.support};
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    h2 {
      color: ${({ theme }) => theme.colors.text};
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.2rem;
      font-weight: 400;
      text-align: justify;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 700px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 1000px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;

      h1 {
        font-size: 2.2rem;
      }

      h2 {
        font-size: 1.7rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }
`;
