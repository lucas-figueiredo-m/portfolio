import React from "react";
import { LanguageContentContainer } from "./ProjectDetail.styled";
import { LanguageTypes } from "@services/CmsService";
import { LanguageLogos } from "@components/LanguageLogos";

type LanguageContentProps = {
  language: LanguageTypes;
};

export const LanguageContent: React.FC<LanguageContentProps> = ({
  language,
}) => {
  return (
    <LanguageContentContainer>
      <LanguageLogos language={language} />
      <h2>{language}</h2>
    </LanguageContentContainer>
  );
};
