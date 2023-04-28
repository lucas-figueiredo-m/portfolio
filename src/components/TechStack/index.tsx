import React, { ReactNode } from "react";
import { PhoneIcon, TechStackContainer, ServerIcon } from "./styles";
import { TechStackItem } from "./TechStackItem";
import { TechStackData } from "./Techtack.type";

const techStack: TechStackData[] = [
  {
    title: "Mobile Developer",
    description: "",
    icon: <PhoneIcon />,
    frameworks: ["React Native", "Redux", "Jotai", "etc"],
    devTools: ["XCode", "Flipper", "Android Studio"],
  },
  {
    title: "Backend Developer",
    description: "",
    icon: <ServerIcon />,
    frameworks: ["React Native", "Redux", "Jotai", "etc"],
    devTools: ["XCode", "Flipper", "Android Studio"],
  },
  {
    title: "Mobile Developer",
    description: "",
    icon: <PhoneIcon />,
    frameworks: ["React Native", "Redux", "Jotai", "etc"],
    devTools: ["XCode", "Flipper", "Android Studio"],
  },
];

export const TechStack: React.FC = () => {
  return (
    <TechStackContainer>
      {techStack.map((tech, index) => (
        <TechStackItem key={index.toString()} tech={tech} />
      ))}
    </TechStackContainer>
  );
};
