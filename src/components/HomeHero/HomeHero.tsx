import React from "react";
import { Container, StyledImage, TextContainer } from "./styles";

import Selfie from "@assets/images/me.png";
import Image from "next/image";

export const HomeHero: React.FC = () => {
  return (
    <Container>
      <StyledImage src={Selfie} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hi there!</h1>
          <h2>{`I'm Lucas`}</h2>
          <p>A mobile engineer with almost 6 years of experience</p>
        </TextContainer>
      </div>
    </Container>
  );
};
