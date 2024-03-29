import React from "react";
import { Container, StyledImage, TextContainer } from "./styles";

import Selfie from "@assets/images/me.png";

export const HomeHero: React.FC = () => {
  return (
    <Container>
      <StyledImage src={Selfie} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hi there!</h1>
          <h2>{`I'm Lucas`}</h2>
          <p>Senior mobile engineer with almost 6 years of experience</p>
        </TextContainer>
      </div>
    </Container>
  );
};
