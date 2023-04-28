import React from "react";
import { Container, GithubIcon, LinkedinIcon } from "./styles";
import Link from "next/link";

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <div className="container">
        <button onClick={handleScrollTop} type="button">
          Back to top
        </button>
        <section>
          <Link
            href={"https://www.linkedin.com/in/lucas-figueiredo-m/"}
            target="_blank"
          >
            <LinkedinIcon />
          </Link>

          <Link href={"https://github.com/lucas-figueiredo-m"} target="_blank">
            <GithubIcon />
          </Link>
        </section>
      </div>
    </Container>
  );
};
