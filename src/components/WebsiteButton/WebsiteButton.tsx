import Link from "next/link";
import React from "react";
import { TiWorld } from "react-icons/ti";
import { Container } from "./WebsiteButton.styled";

type WebsiteButtonProps = {
  url: string;
};

export const WebsiteButton: React.FC<WebsiteButtonProps> = ({ url }) => {
  return (
    <Container>
      <Link href={url} target="_blank">
        <div>
          <TiWorld color="white" />
          <section>
            <h2>Click to open on</h2>
            <h1>Web</h1>
          </section>
        </div>
      </Link>
    </Container>
  );
};
