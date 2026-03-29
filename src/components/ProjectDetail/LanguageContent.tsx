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
    <div className="flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 [&_svg]:h-5 [&_svg]:w-5">
      <LanguageLogos language={language} />
      <span className="text-sm font-medium text-text-secondary">
        {language}
      </span>
    </div>
  );
};
