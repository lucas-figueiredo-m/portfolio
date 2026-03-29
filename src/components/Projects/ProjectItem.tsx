import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-lg overflow-hidden transition-transform duration-500 hover:translate-y-[-2px]"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-surface">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <span className="block text-xs text-accent uppercase tracking-wider mt-3">
        {type}
      </span>
      <h3 className="text-lg font-semibold text-text-primary mt-1">{title}</h3>
    </Link>
  );
};
