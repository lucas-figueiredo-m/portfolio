import React from "react";

type ProjectsContainerProps = {
  children: React.ReactNode;
};

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col w-full h-full [&>main]:grid [&>main]:gap-6 [&>main]:mt-20 [&>main]:mb-20 [&>main]:grid-cols-1 [&>main]:w-full min-[550px]:[&>main]:grid-cols-2 min-[1000px]:[&>main]:grid-cols-3">
      {children}
    </div>
  );
};
