import React from "react";
import { Container, EmailIcon, GithubIcon, LinkedinIcon } from "./styles";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <Link
          href={"https://www.linkedin.com/in/lucas-figueiredo-m/"}
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
        <Link href={"https://github.com/lucas-figueiredo-m"} target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href={
            "mailto:lucasfigueiredo285@gmail.com?subject=Senior React Native developer requested"
          }
        >
          <EmailIcon />
        </Link>
      </div>
    </Container>
  );
};
