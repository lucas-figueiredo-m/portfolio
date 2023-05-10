import { GetServerSideProps } from "next";
import { CmsService, ProjectType } from "@services/CmsService";
import React from "react";

type ProjectDetailsType = {
  project: ProjectType;
};

const ProjectDetailsPage: React.FC<ProjectDetailsType> = ({ project }) => {
  return <div>{project.title}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;

  const project = await CmsService.getUniqueProject(String(params?.slug));

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetailsPage;
