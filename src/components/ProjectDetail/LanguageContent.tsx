import React from "react";
import { LanguageTypes } from "@services/CmsService";
import { LanguageLogos } from "@components/LanguageLogos";

type LanguageContentProps = {
  language: LanguageTypes;
};

export const LanguageContent: React.FC<LanguageContentProps> = ({
  language,
}) => {
  return (
    <div className="flex flex-row items-center gap-6 [&_svg]:w-12 [&_svg]:h-12 [&_h2]:text-2xl [&_h2]:font-medium max-[700px]:gap-4 max-[700px]:[&_div]:gap-4 max-[700px]:[&_svg]:w-8 max-[700px]:[&_svg]:h-8 max-[700px]:[&_h2]:text-[1.2rem]">
      <LanguageLogos language={language} />
      <h2>{language}</h2>
    </div>
  );
};
