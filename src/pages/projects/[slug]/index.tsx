import { GetServerSideProps } from "next";
import { CmsService, ProjectType } from "@services/CmsService";
import React from "react";
import { Banner, ProjectDetailContainer } from "@components/ProjectDetail";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { LanguageLogos } from "@components/LanguageLogos";

type ProjectDetailsType = {
  project: ProjectType;
};

const ProjectDetailsPage: React.FC<ProjectDetailsType> = ({ project }) => {
  return (
    <ProjectDetailContainer>
      <Header />
      <Banner
        imgSrc={project.coverImage.url}
        language={project.language}
        frameworks={project.frameworks}
      />
      <main className="container"></main>
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
