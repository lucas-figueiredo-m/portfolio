import React from "react";
import { Header } from "@components/Header";

import { Footer } from "@components/Footer";
import { ProjectItem, ProjectsContainer } from "@components/Projects";

const imgUrl =
  "https://www.datocms-assets.com/99299/1683239140-seuvale_cover.png";

const ProjectsPage: React.FC = () => {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem title="Foo" slug="foo" imgUrl={imgUrl} type="mobile" />
        <ProjectItem title="Foo" slug="foo" imgUrl={imgUrl} type="mobile" />
        <ProjectItem title="Foo" slug="foo" imgUrl={imgUrl} type="mobile" />
        <ProjectItem title="Foo" slug="foo" imgUrl={imgUrl} type="mobile" />
        <ProjectItem title="Foo" slug="foo" imgUrl={imgUrl} type="mobile" />
      </main>
      <Footer />
    </ProjectsContainer>
  );
};

export default ProjectsPage;
