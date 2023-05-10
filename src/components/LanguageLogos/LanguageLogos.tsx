import { SwiftIcon, TsIcon, GoIcon, JavaIcon, KotlinIcon } from "@assets/icons";
import { LanguageTypes } from "@services/CmsService";
import { LogoObject } from "@types";
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";

type LanguageLogosProps = {
  language: LanguageTypes;
};

export const LanguageLogos: React.FC<LanguageLogosProps> = ({ language }) => {
  const logos: LogoObject<LanguageTypes> = {
    Swift: <SwiftIcon />,
    TypeScript: <TsIcon fill="rgb(52, 120, 198)" />,
    JavaScript: <IoLogoJavascript fill="rgb(238, 211, 57)" />,
    Golang: <GoIcon />,
    Java: <JavaIcon />,
    Kotlin: <KotlinIcon />,
  };

  return logos[language];
};
