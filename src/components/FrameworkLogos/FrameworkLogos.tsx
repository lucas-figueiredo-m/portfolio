import {
  ExpressIcon,
  NestJSIcon,
  NextJSIcon,
  SwiftUIIcon,
} from "@assets/icons";
import { FrameworkTypes } from "@services/CmsService";
import { LogoObject } from "@types";
import React from "react";
import { IoLogoReact } from "react-icons/io5";

type FrameworkLogosProps = {
  framework: FrameworkTypes;
};

export const FrameworkLogos: React.FC<FrameworkLogosProps> = ({
  framework,
}) => {
  const logos: LogoObject<FrameworkTypes> = {
    SwiftUI: <SwiftUIIcon />,
    ReactJS: <IoLogoReact fill="rgb(73, 156, 198)" />,
    "React Native": <IoLogoReact fill="rgb(130, 215, 247)" />,
    NextJS: <NextJSIcon />,
    NestJS: <NestJSIcon />,
    Express: <ExpressIcon />,
  };

  return logos[framework];
};
