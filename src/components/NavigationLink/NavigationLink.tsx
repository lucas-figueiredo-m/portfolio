import Link from "next/link";
import React from "react";
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
    <li>
      <div className="transition-all duration-500 ease-in-out mt-8 hover:scale-105">
        <Link href={url} className={`uppercase transition-colors duration-500 max-[700px]:text-2xl max-[700px]:font-medium ${
              isActive
                ? "text-[#FF2D19] hover:text-[#ff7066]"
                : "text-white hover:text-[#ffffff4d]"
            }`}>
            {label}
        </Link>
      </div>
    </li>
  );
};
