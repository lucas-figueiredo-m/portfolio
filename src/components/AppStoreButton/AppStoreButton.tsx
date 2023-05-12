import { AppStoreBadge } from "@assets/icons";
import Link from "next/link";
import React from "react";
import { Container } from "./AppStoreButton.styled";

type AppStoreButtonProps = {
  url: string;
};

export const AppStoreButton: React.FC<AppStoreButtonProps> = ({ url }) => {
  return (
    <Container>
      <Link href={url} target="_blank">
        <AppStoreBadge />
      </Link>
    </Container>
  );
};
