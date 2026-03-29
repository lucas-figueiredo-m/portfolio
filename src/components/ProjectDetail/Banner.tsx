import React from "react";
import { FrameworkTypes, LanguageTypes } from "@services/CmsService";
import { LanguageContent } from "./LanguageContent";
import { FrameworkContent } from "./FrameworkContent";

type BannerProps = {
  imgSrc: string;
  language: LanguageTypes;
  frameworks: FrameworkTypes[];
  title: string;
};

export const Banner: React.FC<BannerProps> = ({
  imgSrc,
  language,
  frameworks,
  title,
}) => {
  return (
    <section className="[&>h1]:mb-16 [&>h1]:text-[2.5rem] [&>h1]:font-semibold [&>h1]:text-center max-[700px]:[&>h1]:text-[1.8rem]">
      <div
        className="w-full h-[30rem] bg-no-repeat bg-[length:100%] relative bg-[center_center] [mask-image:linear-gradient(black_30%,transparent_90%)] max-[1000px]:h-80 max-[700px]:h-40"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <h1>{title}</h1>
      <div className="container flex flex-row items-start justify-between max-[700px]:flex-col max-[700px]:gap-6 max-[700px]:items-center">
        <LanguageContent language={language} />
        <FrameworkContent frameworks={frameworks} />
      </div>
    </section>
  );
};
