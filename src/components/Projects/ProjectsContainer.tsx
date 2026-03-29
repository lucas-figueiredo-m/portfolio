import React from "react";

type ProjectsContainerProps = {
  children: React.ReactNode;
};

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  children,
}) => {
  return <div className="flex min-h-screen w-full flex-col">{children}</div>;
};
