import React from "react";
import Head from "next/head";
import { Header } from "@components/Header";
import { WorkItem } from "@components/WorkItem";
import { SectionTitle } from "@components/SectionTitle";
import { RevealOnScroll } from "@components/RevealOnScroll";
import { CmsService, WorksType } from "@services/CmsService";
import { Footer } from "@components/Footer";

type WorkPageProps = {
  works: WorksType[];
};

const WorkPage: React.FC<WorkPageProps> = ({ works }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Head>
        <title>Work Experience | Lucas Figueiredo</title>
        <meta
          name="description"
          content="Professional work experience of Lucas Figueiredo as a mobile engineer."
        />
      </Head>
      <Header />
      <main className="container">
        <RevealOnScroll>
          <section className="flex w-full flex-col gap-12 py-24">
            <SectionTitle label="Work" title="Professional Experience" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {works.map((work) => (
                <WorkItem
                  key={work.id}
                  title={work.company}
                  type={work.jobType}
                  imgUrl={work.coverImage.url}
                  slug={work.slug}
                />
              ))}
            </div>
          </section>
        </RevealOnScroll>
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
