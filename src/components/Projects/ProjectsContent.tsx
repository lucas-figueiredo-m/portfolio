import React from "react";

type ProjectsContentProps = {
  children: React.ReactNode;
};

export const ProjectsContent: React.FC<ProjectsContentProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};
