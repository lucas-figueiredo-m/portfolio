import React from "react";
import Link from "next/link";
import { ProjectTypesType } from "@services/CmsService";

type ProjectItemProps = {
  title: string;
  type: ProjectTypesType;
  imgUrl: string;
  slug: string;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  type,
  imgUrl,
  slug,
}) => {
  return (
    <div>
      <Link
        href={`/projects/${slug}`}
        className="group flex relative w-full h-80 p-6 bg-cover bg-center bg-no-repeat rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden items-center justify-center border border-transparent bg-clip-padding box-border hover:border-[#FF2D19]"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="bg-black opacity-60 group-hover:opacity-20 transition-opacity duration-500 absolute w-full h-full rounded-2xl" />
        <section className="z-[2] flex flex-col items-start justify-end w-full h-full">
          <h1 className="text-[2rem] font-medium text-white">{title}</h1>
          <h2 className="text-2xl text-white">{type}</h2>
        </section>
      </Link>
    </div>
  );
};
