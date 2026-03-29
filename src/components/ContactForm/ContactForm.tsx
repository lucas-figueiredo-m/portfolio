import React from "react";
import { SectionTitle } from "@components/SectionTitle";
import { Form } from "..";

export const ContactForm: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};
