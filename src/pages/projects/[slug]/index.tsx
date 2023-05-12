import { GetServerSideProps } from "next";
import { CmsService, ProjectType } from "@services/CmsService";
import React from "react";
import { Banner, ProjectDetailContainer } from "@components/ProjectDetail";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { ProjectDetailContent } from "@components/ProjectDetail";
import { BagdesContainer, ColumnPackages } from "@components/ProjectDetail";
import { PlayStoreButton } from "@components/PlayStoreButton";
import { AppStoreButton } from "@components/AppStoreButton";
import { GithubButton } from "@components/GithubButton";

import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import { WebsiteButton } from "@components/WebsiteButton";

type ProjectDetailsType = {
  project: ProjectType;
};

const ProjectDetailsPage: React.FC<ProjectDetailsType> = ({ project }) => {
  return (
    <ProjectDetailContainer>
      <title>Lucas Figueiredo - {project.title}</title>
      <Header />
      <Banner
        title={project.title}
        imgSrc={project.coverImage.url}
        language={project.language}
        frameworks={project.frameworks}
      />
      <main className="container">
        <ProjectDetailContent>
          {project.packages && (
            <>
              <h2>Packages</h2>
              <ColumnPackages>
                <ul>
                  {project.packages?.map((packageName, index) => (
                    <li key={index}>{packageName}</li>
                  ))}
                </ul>
              </ColumnPackages>
            </>
          )}
          <h2>Description</h2>
          <p>{project.description}</p>
          {project.isPublic && project.reproduce && (
            <>
              <h2>Running the Project</h2>
              {parse(DOMPurify.sanitize(project.reproduce))}
            </>
          )}
        </ProjectDetailContent>
        <BagdesContainer>
          {project.appStoreUrl && <AppStoreButton url={project.appStoreUrl} />}
          {project.playStoreUrl && (
            <PlayStoreButton url={project.playStoreUrl} />
          )}
          {project.github && <GithubButton url={project.github} />}
          {project.url && <WebsiteButton url={project.url} />}
        </BagdesContainer>
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
