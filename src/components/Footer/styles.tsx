import styled from "styled-components";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  /* background: white; */

  /* height: 5rem; */
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.colors.support};
    /* background: green; */
    padding: 2rem 0;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.secondary};
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.2rem;
      font-family: "Montserrat";
    }

    section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
  }

  @media (max-width: 550px) {
    > div {
      margin: 0 2rem 0 2rem;
    }

    button {
      font-size: 0.9rem;
    }
  }
`;

export const LinkedinIcon = styled(IoLogoLinkedin)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.support};
  }

  @media (max-width: 450px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const GithubIcon = styled(IoLogoGithub)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  transition: 0.5s;
  margin-left: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.support};
  }

  @media (max-width: 450px) {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
  }
`;
