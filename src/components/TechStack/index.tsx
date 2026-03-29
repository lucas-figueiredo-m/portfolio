import React from "react";
import { IoPhonePortraitOutline, IoServer } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { TechStackItem } from "./TechStackItem";
import { TechStackData } from "./TechStack.type";

const techStack: TechStackData[] = [
  {
    title: "Mobile",
    description: "",
    icon: <IoPhonePortraitOutline className="w-10 h-10 stroke-black" />,
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
    icon: <IoServer className="w-10 h-10 fill-black" />,
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
    icon: <BsThreeDots className="w-10 h-10 fill-black" />,
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
    <div className="w-full rounded-t-[2rem] bg-white [mask-image:linear-gradient(black_80%,transparent_90%)] py-12 pb-36 px-0 flex flex-row max-[800px]:flex-col max-[800px]:gap-12 max-[800px]:px-12 max-[800px]:[mask-image:linear-gradient(black_90%,transparent_95%)] max-[500px]:px-6 max-[500px]:rounded-t-[1.5rem]">
      {techStack.map((tech, index) => (
        <TechStackItem key={index.toString()} tech={tech} isLast={index === techStack.length - 1} />
      ))}
    </div>
  );
};
