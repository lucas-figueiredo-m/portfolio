import Link from "next/link";
import React from "react";
import { TiWorld } from "react-icons/ti";

type WebsiteButtonProps = {
  url: string;
};

export const WebsiteButton: React.FC<WebsiteButtonProps> = ({ url }) => {
  return (
    <div className="flex w-40 bg-black border border-[rgb(163,163,163)] rounded-lg px-2 py-1 transition-opacity duration-500 opacity-100 hover:opacity-80">
      <Link href={url} target="_blank">
        <div className="flex flex-1">
          <TiWorld className="w-[2.2rem] h-[2.2rem] fill-white stroke-white" />
          <section className="flex flex-col flex-1 justify-center ml-2">
            <h2 className="text-xs font-medium text-white m-0 p-0">Click to open on</h2>
            <h1 className="text-2xl font-semibold text-white m-0 p-0">Web</h1>
          </section>
        </div>
      </Link>
    </div>
  );
};
