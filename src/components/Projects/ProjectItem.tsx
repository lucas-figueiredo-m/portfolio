import React from "react";
import { ProjectItemContainer } from "./projects.styled";
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
    <ProjectItemContainer imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`} legacyBehavior>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </ProjectItemContainer>
  );
};
