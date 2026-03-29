import React from "react";

type BadgesContainerProps = {
  children: React.ReactNode;
};

export const BadgesContainer: React.FC<BadgesContainerProps> = ({
  children,
}) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-3 mt-10">
      {children}
    </div>
  );
};
