import React from "react";

type ProjectDetailContentProps = {
  children: React.ReactNode;
};

export const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({
  children,
}) => {
  return (
    <div className="max-w-4xl mx-auto [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary sm:[&_h2]:text-2xl [&_p]:mt-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-text-secondary [&>ol>li]:pl-4 [&>ol>li]:text-sm [&>ol>li]:text-text-secondary">
      {children}
    </div>
  );
};
