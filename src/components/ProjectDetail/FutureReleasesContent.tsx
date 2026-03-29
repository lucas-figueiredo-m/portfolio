import React from "react";

type FutureReleasesContentProps = {
  children: React.ReactNode;
};

export const FutureReleasesContent: React.FC<FutureReleasesContentProps> = ({
  children,
}) => {
  return (
    <div className="[&_ul]:mt-4 [&_ul]:list-none [&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:text-sm [&_li]:text-text-secondary [&_li]:before:content-['→'] [&_li]:before:text-accent [&_li]:before:shrink-0">
      {children}
    </div>
  );
};
