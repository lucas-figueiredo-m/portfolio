import React from "react";
import Head from "next/head";
import { Header } from "@components/Header";
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
    <div className="flex flex-col w-full h-full [&>main]:flex [&>main]:flex-col [&>main]:gap-32">
      <Head>
        <title>Work Experience | Lucas Figueiredo</title>
        <meta name="description" content="Professional work experience of Lucas Figueiredo as a mobile engineer." />
      </Head>
      <Header />
      <main className="container">
        <section className="w-full flex flex-col items-center gap-20 my-20">
          {works.map((work, index) => (
            <WorkItem
              key={index}
              title={work.company}
              type={work.jobType}
              imgUrl={work.coverImage.url}
              slug={work.slug}
              isEven={index % 2 !== 0}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
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
