import React from "react";
import Head from "next/head";
import { Header } from "@components/Header";
import { HomeHero } from "@components/HomeHero";
import { Footer } from "@components/Footer";
import { Experiences } from "@components/Experiences";
import { TechStack } from "@components/TechStack";
import { ContactForm } from "@components/ContactForm";
import { Expertise } from "@components/Expertise";
import { CmsService, ExperiencesType } from "@services/CmsService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GetStaticProps } from "next";

type HomeProps = {
  experiences: ExperiencesType[];
};

const Home: React.FC<HomeProps> = ({ experiences }) => {
  return (
    <div className="flex flex-col w-full h-full [&>main]:flex [&>main]:flex-col [&>main]:gap-32">
      <Head>
        <title>Lucas Figueiredo | Mobile Engineer</title>
        <meta name="description" content="Portfolio of Lucas Figueiredo, a Mobile Engineer specialized in React Native, TypeScript, and mobile app development." />
        <meta property="og:title" content="Lucas Figueiredo | Mobile Engineer" />
        <meta property="og:description" content="Portfolio of Lucas Figueiredo, a Mobile Engineer specialized in React Native, TypeScript, and mobile app development." />
        <meta property="og:type" content="website" />
      </Head>
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
        progressStyle={{ backgroundColor: "#FF2D19" }}
        theme="dark"
      />
    </div>
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
