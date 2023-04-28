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

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <TechStack />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
