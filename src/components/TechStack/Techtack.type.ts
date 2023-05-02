import { ReactNode } from "react";

export type TechStackData = {
  title: string;
  description: string;
  icon: ReactNode;
  frameworks: string[];
  devTools: string[];
};
