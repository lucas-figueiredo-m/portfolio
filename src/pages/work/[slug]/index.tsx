import React from "react";
import Head from "next/head";
import { Header } from "@components/Header";
import { WorkDetailItem } from "@components/WorkDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import { CmsService, WorksType } from "@services/CmsService";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import { Footer } from "@components/Footer";

type WorkDetailsType = {
  work: WorksType;
};

const WorkDetails: React.FC<WorkDetailsType> = ({ work }) => {
  return (
    <div className="flex flex-col w-full h-full [&>main]:flex [&>main]:flex-col [&>main]:gap-32">
      <Head>
        <title>{work.company} | Lucas Figueiredo</title>
        <meta name="description" content={work.description} />
      </Head>
      <Header />
      <main className="container">
        <section className="flex w-full flex-col items-center mt-16 gap-6 [&>h1]:text-[3.5rem] [&>h1]:font-semibold [&>h2]:text-[2rem]">
          <h1>{work.company}</h1>
          <h2>{work.role}</h2>
        </section>
        <WorkDetailItem imgUrl={work.topImage.url} isOdd>
          <p>{work.description}</p>
        </WorkDetailItem>
        <WorkDetailItem imgUrl={work.bottomImage.url}>
          <h2>Responsabilities</h2>
          {parse(DOMPurify.sanitize(work.responsability))}
        </WorkDetailItem>
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
