import React from "react";
import { ExperienceItemContainer } from "./styles";
import { dateUtils } from "@utils";

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
  const fromText = dateUtils.format.yearOnly(from);
  const toText = dateUtils.format.yearOnly(to);
  return (
    <ExperienceItemContainer>
      <div>
        <h1>{`${fromText} - ${toText}`}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ExperienceItemContainer>
  );
};
