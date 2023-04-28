import React, { ReactNode } from "react";
import { TechStackItemContainer } from "./styles";
import { TechStackData } from "./Techtack.type";

type TechStackItemProps = {
  tech: TechStackData;
};

export const TechStackItem: React.FC<TechStackItemProps> = ({ tech }) => {
  const { icon, title, description, frameworks, devTools } = tech;

  return (
    <TechStackItemContainer>
      <div>{icon}</div>

      <h2>{title}</h2>
      <p>{description}</p>

      <h3>Frameworks:</h3>
      <p>{frameworks.join(", ")}</p>

      <h3>Dev Tools:</h3>
      {devTools.map((tool, index) => (
        <p key={index.toString()}>{tool}</p>
      ))}
    </TechStackItemContainer>
  );
};
