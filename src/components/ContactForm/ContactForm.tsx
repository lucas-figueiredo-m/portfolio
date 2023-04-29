import React from "react";
import { Container } from "./styles";
import { SectionTitle } from "@components/SectionTitle";
import { Form } from "..";

export const ContactForm: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        title={<>Need my services?</>}
        description={
          <>
            Fill the form below
            <br />
            {"and I'll contact you soon"}
          </>
        }
      />
      <Form />
    </Container>
  );
};
