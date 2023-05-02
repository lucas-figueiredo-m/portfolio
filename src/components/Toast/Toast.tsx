import React from "react";
import { Container } from "./styles";

type ToastProps = {
  icon: React.ReactNode;
  color: string;
  label: string;
};

export const Toast: React.FC<ToastProps> = ({ icon, label, color }) => {
  return (
    <Container color={color}>
      {icon}
      <h2>{label}</h2>
    </Container>
  );
};
