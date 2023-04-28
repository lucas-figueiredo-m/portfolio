import React from "react";
import { ExperienceItemContainer } from "./styles";

type ExperienceItemProps = {
  from: string;
  to: string;
  title: string;
  description: string;
};

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  from,
  to,
  title,
  description,
}) => {
  return (
    <ExperienceItemContainer>
      <div>
        <h1>{`${from} - ${to}`}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ExperienceItemContainer>
  );
};
