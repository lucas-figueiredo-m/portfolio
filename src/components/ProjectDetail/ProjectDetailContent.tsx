import React from "react";

type ProjectDetailContentProps = {
  children: React.ReactNode;
};

export const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({
  children,
}) => {
  return (
    <div className="[&_h2]:text-[2rem] [&_h2]:font-medium [&_h2]:mt-20 [&_p]:text-2xl [&_p]:text-justify [&_p]:mt-6 [&>ol>li]:pl-4 [&>ol>li]:text-base [&>ol>li]:font-medium max-[700px]:[&_h2]:text-2xl max-[700px]:[&_h2]:mt-8 max-[700px]:[&_p]:text-[1.1rem] max-[700px]:[&_p]:mt-[1.1rem]">
      {children}
    </div>
  );
};
