import React from "react";
import { WorkDetailContent, WorkDetailsContainer } from "@styles";
import { Header } from "@components/Header";
import { WorkDetailItem } from "@components/WorkDetail";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;

  const work = await CmsService.getUniqueWork(String(params?.slug));

  return {
    props: {
      work,
    },
  };
};

export default WorkDetails;
