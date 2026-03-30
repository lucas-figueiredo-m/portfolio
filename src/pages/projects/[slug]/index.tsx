import { GetStaticProps, GetStaticPaths } from "next";
import { CmsService, ProjectType } from "@services/CmsService";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Banner,
  FutureReleasesContent,
  ProjectDetailContainer,
} from "@components/ProjectDetail";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import {
  BadgesContainer,
  ColumnPackages,
  ProjectDetailContent,
} from "@components/ProjectDetail";
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
      <Head>
        <title>{project.title} | Lucas Figueiredo</title>
        <meta name="description" content={project.description} />
      </Head>
      <Header />
      <main className="container py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          &larr; Back to Projects
        </Link>
        <Banner
          title={project.title}
          imgSrc={project.coverImage.url}
          language={project.language}
          frameworks={project.frameworks}
          projectType={project.projectType}
        />
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
          {project.futureReleases && (
            <FutureReleasesContent>
              <h2>Fixes and Future releases</h2>
              {parse(DOMPurify.sanitize(project.futureReleases))}
            </FutureReleasesContent>
          )}
        </ProjectDetailContent>
        <BadgesContainer>
          {project.appStoreUrl && <AppStoreButton url={project.appStoreUrl} />}
          {project.playStoreUrl && (
            <PlayStoreButton url={project.playStoreUrl} />
          )}
          {project.github && <GithubButton url={project.github} />}
          {project.url && <WebsiteButton url={project.url} />}
        </BadgesContainer>
      </main>
      <Footer />
    </ProjectDetailContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await CmsService.getAllProjects();

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;

  const project = await CmsService.getUniqueProject(String(params?.slug));

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetailsPage;
