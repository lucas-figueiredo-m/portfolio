import { AppStoreBadge } from "@assets/icons";
import Link from "next/link";
import React from "react";

type AppStoreButtonProps = {
  url: string;
};

export const AppStoreButton: React.FC<AppStoreButtonProps> = ({ url }) => {
  return (
    <div className="transition-opacity duration-500 opacity-100 hover:opacity-80 [&_svg]:w-40">
      <Link href={url} target="_blank">
        <AppStoreBadge />
      </Link>
    </div>
  );
};
