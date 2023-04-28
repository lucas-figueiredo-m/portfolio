import React from "react";
import { FormContainer, Input, TextArea } from "./styles";

export const Form: React.FC = () => {
  return (
    <FormContainer>
      <Input placeholder="Name" required />
      <Input placeholder="E-mail" required />
      <TextArea placeholder="Message" required />
      <button type="submit">SEND</button>
    </FormContainer>
  );
};
