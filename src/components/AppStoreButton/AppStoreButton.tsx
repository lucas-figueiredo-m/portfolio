import { AppStoreBadge } from "@assets/icons";
import Link from "next/link";
import React from "react";

type AppStoreButtonProps = {
  url: string;
};

export const AppStoreButton: React.FC<AppStoreButtonProps> = ({ url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-text-tertiary hover:bg-surface-elevated [&_svg]:h-5 [&_svg]:w-auto"
    >
      <AppStoreBadge />
      App Store
    </Link>
  );
};
