import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { Container } from "./GithubButton.styled";

type GithubButtonProps = {
  url: string;
};

export const GithubButton: React.FC<GithubButtonProps> = ({ url }) => {
  return (
    <Container>
      <Link href={url} target="_blank">
        <div>
          <IoLogoGithub />
          <section>
            <h2>See code on</h2>
            <h1>Github</h1>
          </section>
        </div>
      </Link>
    </Container>
  );
};
