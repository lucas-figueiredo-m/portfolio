import React from "react";
import Head from "next/head";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { ProjectItem, ProjectsContainer } from "@components/Projects";
import { SectionTitle } from "@components/SectionTitle";
import { RevealOnScroll } from "@components/RevealOnScroll";
import { AllProjects, CmsService } from "@services/CmsService";
import { GetStaticProps } from "next";

type ProjectsPageProps = {
  projects: AllProjects[];
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projects | Lucas Figueiredo</title>
        <meta
          name="description"
          content="Personal and professional projects by Lucas Figueiredo."
        />
      </Head>
      <Header />
      <main className="container py-20">
        <RevealOnScroll>
          <SectionTitle label="Projects" title="Things I've Built" />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                slug={project.slug}
                imgUrl={project.coverImage.url}
                type={project.projectType}
              />
            ))}
          </div>
        </RevealOnScroll>
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
