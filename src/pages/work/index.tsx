import React from "react";
import { Header } from "@components/Header";

import { WorkContainer, WorkContent } from "@styles";
import { WorkItem } from "@components/WorkItem";
import { CmsService, WorksType } from "@services/CmsService";
import { Footer } from "@components/Footer";

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
              title={work.company}
              type={work.jobType}
              imgUrl={work.coverImage.url}
              slug={work.slug}
            />
          ))}
        </WorkContent>
      </main>
      <Footer />
    </WorkContainer>
  );
};

export const getStaticProps = async () => {
  const works = await CmsService.getAllWorks();

  return {
    props: {
      works,
    },
    revalidate: 60 * 60 * 12,
  };
};

export default WorkPage;
