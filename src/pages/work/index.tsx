import React from "react";
import { Header } from "@components/Header";

import { WorkContainer, WorkContent } from "@styles";
import { WorkItem } from "@components/WorkItem";
import { CmsService, WorksType } from "@services/CmsService";

const imgUrl =
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

type WorkPageProps = {
  works: WorksType[];
};

const WorkPage: React.FC<WorkPageProps> = ({ works }) => {
  return (
    <WorkContainer>
      <Header />
      <main className="container">
        <WorkContent>
          {works.map((work, index) => (
            <WorkItem
              key={index}
              title={work.title}
              type={work.type}
              imgUrl={work.imgUrl}
              slug={work.slug}
            />
          ))}
        </WorkContent>
      </main>
    </WorkContainer>
  );
};

export const getStaticProps = async () => {
  const experiences = await CmsService.getAllExperiences();

  const works: WorksType[] = [
    {
      title: "Jobble",
      type: "Mobile",
      slug: "jobble",
      imgUrl,
    },
    {
      title: "Jobble",
      type: "Mobile",
      slug: "jobble",
      imgUrl,
    },
    {
      title: "Jobble",
      type: "Mobile",
      slug: "jobble",
      imgUrl,
    },
  ];

  return {
    props: {
      works,
    },
  };
};

export default WorkPage;
