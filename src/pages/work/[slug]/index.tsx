import React from "react";
import { WorkDetailContent, WorkDetailsContainer } from "./styles";
import { Header } from "@components/Header";
import { WorkDetailItem } from "@components/WorkDetail";

const imgUrl =
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const WorkDetails: React.FC = () => {
  return (
    <WorkDetailsContainer>
      <Header />
      <main className="container">
        <WorkDetailContent>
          <h1>Company</h1>
          <h2>Role</h2>
        </WorkDetailContent>
        <WorkDetailItem imgUrl={imgUrl}>
          <p>
            This snippet shown above, or the snippets from the Fettblog post are
            great for when we simply need TypeScript to understand the children
            prop in our component. But what if we wanted to ensure our children
            were of a certain type?
          </p>
        </WorkDetailItem>
        <WorkDetailItem imgUrl={imgUrl}>
          <p>
            This snippet shown above, or the snippets from the Fettblog post are
            great for when we simply need TypeScript to understand the children
            prop in our component. But what if we wanted to ensure our children
            were of a certain type?
          </p>
        </WorkDetailItem>
      </main>
    </WorkDetailsContainer>
  );
};

export default WorkDetails;
