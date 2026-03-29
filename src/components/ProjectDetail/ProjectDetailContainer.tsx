import React from "react";

type ProjectDetailContainerProps = {
  children: React.ReactNode;
};

export const ProjectDetailContainer: React.FC<ProjectDetailContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col w-full h-full [&>main]:flex [&>main]:flex-col [&>main]:gap-32">
      {children}
    </div>
  );
};
