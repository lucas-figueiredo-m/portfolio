import styled from "styled-components";

import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  gap: 2rem;

  > div {
    display: flex;
    gap: 5rem;
  }
`;

export const LinkedinIcon = styled(IoLogoLinkedin)`
  width: 3rem;
  height: 3rem;
  color: rgb(15, 91, 182);
  /* background-color: #ffffff; */
`;
export const GithubIcon = styled(IoLogoGithub)`
  width: 3rem;
  height: 3rem;
  color: #ffffff;
`;
export const EmailIcon = styled(IoMail)`
  width: 3rem;
  height: 3rem;
  color: #ffffff;
`;
