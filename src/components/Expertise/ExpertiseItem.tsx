import React from "react";
import { ExpertiseItemContainer } from "./styles";

type ExpertiseItemProps = {
  icon: React.ReactNode;
  label: string;
  hoverColor: string;
};

export const ExpertiseItem: React.FC<ExpertiseItemProps> = ({
  icon,
  label,
  hoverColor,
}) => {
  return (
    <ExpertiseItemContainer hoverColor={hoverColor}>
      {icon}
      <h2>{label}</h2>
    </ExpertiseItemContainer>
  );
};
