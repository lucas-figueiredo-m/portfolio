import React, { ReactNode } from "react";
import { PhoneIcon, TechStackContainer, ServerIcon, OtherIcon } from "./styles";
import { TechStackItem } from "./TechStackItem";
import { TechStackData } from "./Techtack.type";

const techStack: TechStackData[] = [
  {
    title: "Mobile",
    description: "",
    icon: <PhoneIcon />,
    frameworks: [
      "React Native",
      "Redux",
      "Jotai",
      "React Hook Forms",
      "Firebase",
      "SwiftUI",
    ],
    devTools: ["XCode", "Flipper", "Android Studio"],
  },
  {
    title: "Backend",
    description: "",
    icon: <ServerIcon />,
    frameworks: [
      "Node.JS",
      "Nest.js",
      "PostgreSQL",
      "GraphQL",
      "Github Actions",
      "MySQL",
    ],
    devTools: ["DBeaver", "Firebase", "Postman"],
  },
  {
    title: "Other",
    description: "",
    icon: <OtherIcon />,
    frameworks: [
      "JavaScript",
      "TypeScript",
      "Gitlab-CI",
      "Docker",
      "Kubernetes",
      "Python",
      "Next.JS",
    ],
    devTools: ["Figma", "AdobeXD"],
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
