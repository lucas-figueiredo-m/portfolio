import Link from "next/link";
import React from "react";
import { NavigationLinkContainer } from "./styles";
import { useRouter } from "next/router";

type NavLinkProps = {
  url: string;
  label: string;
};

export const NavigationLink: React.FC<NavLinkProps> = ({ url, label }) => {
  const router = useRouter();

  const isActive = router.pathname === url;

  return (
    <NavigationLinkContainer isActive={isActive}>
      <div>
        <Link href={url} legacyBehavior>
          <a>{label}</a>
        </Link>
      </div>
    </NavigationLinkContainer>
  );
};
