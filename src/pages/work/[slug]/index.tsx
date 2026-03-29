import React from "react";
import Head from "next/head";
import { Header } from "@components/Header";
import { WorkDetailItem } from "@components/WorkDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import { CmsService, WorksType } from "@services/CmsService";
import { Footer } from "@components/Footer";

type WorkDetailsType = {
  work: WorksType;
};

const WorkDetails: React.FC<WorkDetailsType> = ({ work }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Head>
        <title>{work.company} | Lucas Figueiredo</title>
        <meta name="description" content={work.description} />
      </Head>
      <Header />
      <main>
        <WorkDetailItem
          company={work.company}
          role={work.role}
          jobType={work.jobType}
          description={work.description}
          responsability={work.responsability}
          coverImageUrl={work.coverImage.url}
        />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works = await CmsService.getAllWorks();

  const paths = works.map((work) => ({
    params: { slug: work.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;

  const work = await CmsService.getUniqueWork(String(params?.slug));

  return {
    props: {
      work,
    },
    revalidate: 60 * 60 * 12,
  };
};

export default WorkDetails;
