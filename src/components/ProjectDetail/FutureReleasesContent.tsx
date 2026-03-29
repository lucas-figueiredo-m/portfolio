import React from "react";

type FutureReleasesContentProps = {
  children: React.ReactNode;
};

export const FutureReleasesContent: React.FC<FutureReleasesContentProps> = ({
  children,
}) => {
  return (
    <div className="[&_ul]:list-inside [&_li]:text-[1.3rem] max-[700px]:[&_li]:text-base">
      {children}
    </div>
  );
};
