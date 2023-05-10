import React from "react";
import { FrameworkContentContainer } from "./ProjectDetail.styled";
import { FrameworkTypes } from "@services/CmsService";
import { FrameworkLogos } from "@components/FrameworkLogos";

type FrameworkContentProps = {
  frameworks: FrameworkTypes[];
};

export const FrameworkContent: React.FC<FrameworkContentProps> = ({
  frameworks,
}) => {
  return (
    <FrameworkContentContainer>
      {frameworks.map((framework, index) => (
        <div key={index}>
          <FrameworkLogos framework={framework} />
          <h2>{framework}</h2>
        </div>
      ))}
    </FrameworkContentContainer>
  );
};
