import React from "react";
import Link from "next/link";
import Image from "next/image";

type WorkItemProps = {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
  isEven?: boolean;
};

export const WorkItem: React.FC<WorkItemProps> = ({
  title,
  type,
  slug,
  imgUrl,
}) => {
  return (
    <Link
      href={`/work/${encodeURIComponent(slug)}`}
      className="group block overflow-hidden rounded-lg bg-surface transition-transform duration-500 hover:scale-[1.02]"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <span className="text-sm uppercase tracking-wider text-text-tertiary">
          {type}
        </span>
        <h3 className="text-xl font-semibold text-text-primary">
          {title}
        </h3>
      </div>
    </Link>
  );
};
