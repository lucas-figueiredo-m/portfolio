import React from "react";
import {
  FrameworkTypes,
  LanguageTypes,
  ProjectTypesType,
} from "@services/CmsService";
import { LanguageContent } from "./LanguageContent";
import { FrameworkContent } from "./FrameworkContent";

type BannerProps = {
  imgSrc: string;
  language: LanguageTypes;
  frameworks: FrameworkTypes[];
  title: string;
  projectType?: ProjectTypesType;
};

export const Banner: React.FC<BannerProps> = ({
  imgSrc,
  language,
  frameworks,
  title,
  projectType,
}) => {
  return (
    <section className="flex flex-col items-center gap-6 pt-8">
      <div
        className="h-40 w-full bg-cover bg-center bg-no-repeat sm:h-64 lg:h-80"
        style={{
          backgroundImage: `url(${imgSrc})`,
          maskImage: "linear-gradient(black 30%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(black 30%, transparent 95%)",
        }}
      />
      {projectType && (
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          {projectType}
        </span>
      )}
      <h1 className="text-center text-3xl font-bold text-text-primary sm:text-4xl">
        {title}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <LanguageContent language={language} />
        <FrameworkContent frameworks={frameworks} />
      </div>
    </section>
  );
};
