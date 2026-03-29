import React from "react";

type ProjectDetailContainerProps = {
  children: React.ReactNode;
};

export const ProjectDetailContainer: React.FC<ProjectDetailContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col">{children}</div>
  );
};
