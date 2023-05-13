import React from "react";
import { Header } from "@components/Header";

import { Footer } from "@components/Footer";
import { ProjectItem, ProjectsContainer } from "@components/Projects";
import { AllProjects, CmsService } from "@services/CmsService";
import { GetStaticProps } from "next";

const imgUrl =
  "https://www.datocms-assets.com/99299/1683239140-seuvale_cover.png";

type ProjectsPageProps = {
  projects: AllProjects[];
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            slug={project.slug}
            imgUrl={project.coverImage.url}
            type={project.projectType}
          />
        ))}
      </main>
      <Footer />
    </ProjectsContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await CmsService.getAllProjects();

  return {
    props: {
      projects,
    },
  };
};

export default ProjectsPage;
