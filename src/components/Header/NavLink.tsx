import Link from "next/link";
import React from "react";
import { NavLinkContainer } from "./styles";
import { useRouter } from "next/router";
import { motion as Motion } from "framer-motion";

type NavLinkProps = {
  url: string;
  label: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ url, label }) => {
  const router = useRouter();

  const isActive = router.pathname === url;

  return (
    <NavLinkContainer isActive={isActive}>
      <Motion.div whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
        <Link href={url} legacyBehavior>
          <a>{label}</a>
        </Link>
      </Motion.div>
    </NavLinkContainer>
  );
};
