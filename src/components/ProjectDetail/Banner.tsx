import React from "react";
import { BannerImage, LogoContainer } from "./ProjectDetail.styled";
import { FrameworkTypes, LanguageTypes } from "@services/CmsService";
import { LanguageContent } from "./LanguageContent";
import { FrameworkContent } from "./FrameworkContent";

type BannerProps = {
  imgSrc: string;
  language: LanguageTypes;
  frameworks: FrameworkTypes[];
};

export const Banner: React.FC<BannerProps> = ({
  imgSrc,
  language,
  frameworks,
}) => {
  return (
    <div>
      <BannerImage imgSrc={imgSrc} />
      <LogoContainer className="container">
        <LanguageContent language={language} />
        <FrameworkContent frameworks={frameworks} />
      </LogoContainer>
    </div>
  );
};
