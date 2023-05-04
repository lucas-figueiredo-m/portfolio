import Link from "next/link";
import React from "react";
import { NavigationLinkContainer } from "./styles";
import { useRouter } from "next/router";

type NavLinkProps = {
  url: string;
  label: string;
  includes?: boolean;
};

export const NavigationLink: React.FC<NavLinkProps> = ({
  url,
  label,
  includes = false,
}) => {
  const router = useRouter();

  const verifyIfIsActive = () => {
    if (includes) return router.pathname.includes(url);

    return router.pathname === url;
  };

  const isActive = verifyIfIsActive();

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
