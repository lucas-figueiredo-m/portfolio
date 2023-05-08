import React from "react";
import { Header } from "@components/Header";

import { Footer } from "@components/Footer";
import {
  ProjectItem,
  ProjectsContainer,
  ProjectsContent,
} from "@components/Projects";

const ProjectsPage: React.FC = () => {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectsContent>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </ProjectsContent>
      </main>
      <Footer />
    </ProjectsContainer>
  );
};

export default ProjectsPage;
