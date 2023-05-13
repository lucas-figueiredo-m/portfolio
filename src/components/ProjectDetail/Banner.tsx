import React from "react";
import {
  BannerContainer,
  BannerImage,
  LogoContainer,
} from "./ProjectDetail.styled";
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
    <BannerContainer>
      <BannerImage imgSrc={imgSrc} />
      <h1>{title}</h1>
      <LogoContainer className="container">
        <LanguageContent language={language} />
        <FrameworkContent frameworks={frameworks} />
      </LogoContainer>
    </BannerContainer>
  );
};
