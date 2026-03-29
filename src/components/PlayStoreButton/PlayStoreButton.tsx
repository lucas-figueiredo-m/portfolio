import React from "react";
import Link from "next/link";
import { PlayStoreBadge } from "@assets/icons";

type PlayStoreButtonProps = {
  url: string;
};

export const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({ url }) => {
  return (
    <div className="transition-opacity duration-500 opacity-100 hover:opacity-80 [&_svg]:w-40">
      <Link href={url} target="_blank">
        <PlayStoreBadge />
      </Link>
    </div>
  );
};
