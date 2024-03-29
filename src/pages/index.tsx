import React from "react";
import { Header } from "@components/Header";

import { HomeContainer } from "../styles/HomeStyles";
import { HomeHero } from "@components/HomeHero";
import { Footer } from "@components/Footer";
import { Experiences } from "@components/Experiences";
import { TechStack } from "@components/TechStack";
import { ContactForm } from "@components/ContactForm";
import { Expertise } from "@components/Expertise";
import { CmsService, ExperiencesType } from "@services/CmsService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { theme } from "@styles";
import { GetStaticProps } from "next";

type HomeProps = {
  experiences: ExperiencesType[];
};

const Home: React.FC<HomeProps> = ({ experiences }) => {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences experiences={experiences} />
        <Expertise />
        <TechStack />
        <ContactForm />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop
        progressStyle={{ backgroundColor: theme.colors.support }}
        theme="dark"
      />
    </HomeContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await CmsService.getAllExperiences();

  return {
    props: {
      experiences,
    },
    revalidate: 60 * 60 * 12,
  };
};

export default Home;
