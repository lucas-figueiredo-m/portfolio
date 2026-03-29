import React from "react";

type BadgesContainerProps = {
  children: React.ReactNode;
};

export const BadgesContainer: React.FC<BadgesContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-row items-center gap-4 max-[700px]:flex-col max-[700px]:items-center">
      {children}
    </div>
  );
};
