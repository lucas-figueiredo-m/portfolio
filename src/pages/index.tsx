// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, { useEffect } from "react";
import { Header } from "@components/Header";

import { HomeContainer } from "../styles/HomeStyles";
import { HomeHero } from "@components/HomeHero";
import { Footer } from "@components/Footer";
import { Experiences } from "@components/Experiences";
import { TechStack } from "@components/TechStack";
import { ContactForm } from "@components/ContactForm";
import { Expertise } from "@components/Expertise";
import { CmsService, ExperiencesType } from "@services/CmsService";

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
    </HomeContainer>
  );
};

export const getStaticProps = async () => {
  const experiences = await CmsService.getAllExperiences();

  return {
    props: {
      experiences,
    },
  };
};

export default Home;
