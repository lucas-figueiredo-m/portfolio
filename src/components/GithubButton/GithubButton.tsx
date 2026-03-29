import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io5";

type GithubButtonProps = {
  url: string;
};

export const GithubButton: React.FC<GithubButtonProps> = ({ url }) => {
  return (
    <div className="flex w-40 bg-black border border-[rgb(163,163,163)] rounded-lg px-2 py-1 transition-opacity duration-500 opacity-100 hover:opacity-80">
      <Link href={url} target="_blank">
        <div className="flex flex-1">
          <IoLogoGithub className="w-[2.2rem] h-[2.2rem] fill-white" />
          <section className="flex flex-col flex-1 justify-center ml-2">
            <h2 className="text-xs font-medium text-white m-0 p-0">See code on</h2>
            <h1 className="text-2xl font-semibold text-white m-0 p-0">Github</h1>
          </section>
        </div>
      </Link>
    </div>
  );
};
