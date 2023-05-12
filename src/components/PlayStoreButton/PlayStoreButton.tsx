import React from "react";
import { Container } from "./PlayStoreButton.styled";
import Link from "next/link";
import { PlayStoreBadge } from "@assets/icons";

type PlayStoreButtonProps = {
  url: string;
};

export const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({ url }) => {
  return (
    <Container>
      <Link href={url} target="_blank">
        <PlayStoreBadge />
      </Link>
    </Container>
  );
};
