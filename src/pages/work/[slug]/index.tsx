import React from "react";
import Head from "next/head";
import { WorkDetailContent, WorkDetailsContainer } from "@styles";
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
    <WorkDetailsContainer>
      <Head>
        <title>{work.company} | Lucas Figueiredo</title>
        <meta name="description" content={work.description} />
      </Head>
      <Header />
      <main className="container">
        <WorkDetailContent>
          <h1>{work.company}</h1>
          <h2>{work.role}</h2>
        </WorkDetailContent>
        <WorkDetailItem imgUrl={work.topImage.url}>
          <p>{work.description}</p>
        </WorkDetailItem>
        <WorkDetailItem imgUrl={work.bottomImage.url}>
          <h2>Responsabilities</h2>
          {parse(DOMPurify.sanitize(work.responsability))}
          {/* <div dangerouslySetInnerHTML={{ __html: work.responsability }} /> */}
        </WorkDetailItem>
      </main>
      <Footer />
    </WorkDetailsContainer>
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
