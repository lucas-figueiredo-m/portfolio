import React from "react";

type ColumnPackagesProps = {
  children: React.ReactNode;
};

export const ColumnPackages: React.FC<ColumnPackagesProps> = ({ children }) => {
  return (
    <div className="[&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-wrap [&_ul]:gap-2 [&_li]:list-none [&_li]:rounded-full [&_li]:bg-surface-elevated [&_li]:px-3 [&_li]:py-1 [&_li]:text-sm [&_li]:text-text-secondary [&_li]:border [&_li]:border-border">
      {children}
    </div>
  );
};
