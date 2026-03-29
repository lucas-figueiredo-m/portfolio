import Link from "next/link";
import React from "react";
import { TiWorld } from "react-icons/ti";

type WebsiteButtonProps = {
  url: string;
};

export const WebsiteButton: React.FC<WebsiteButtonProps> = ({ url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-text-tertiary hover:bg-surface-elevated"
    >
      <TiWorld className="h-5 w-5" />
      Website
    </Link>
  );
};
