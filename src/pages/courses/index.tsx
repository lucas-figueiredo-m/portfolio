import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, { useEffect } from "react";
import { Header } from "@components/Header";

import { HomeContainer } from "../../styles/HomeStyles";
import { HomeHero } from "@components/HomeHero";
import { IoLogoNodejs, IoLogoReact, IoLogoGithub } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

const CoursesPage: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <div>
        <IoLogoNodejs style={{ width: 200, height: 200, color: "green" }} />
        <IoLogoReact style={{ width: 200, height: 200, color: "blue" }} />
        <IoLogoGithub style={{ width: 200, height: 200, color: "gray" }} />
      </div>
    </HomeContainer>
  );
};

export default CoursesPage;
