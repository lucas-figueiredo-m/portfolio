import React from "react";
import { Container } from "./styles";

type SectionTitleProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
};
