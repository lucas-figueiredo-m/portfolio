import { GetServerSideProps } from "next";
import { CmsService, ProjectType } from "@services/CmsService";
import React from "react";
import { ProjectDetailContainer } from "@components/ProjectDetail";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

type ProjectDetailsType = {
  project: ProjectType;
};

const ProjectDetailsPage: React.FC<ProjectDetailsType> = ({ project }) => {
  return (
    <ProjectDetailContainer>
      <Header />
      <main className="container">
        <div />
      </main>
      <Footer />
    </ProjectDetailContainer>
  );
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
