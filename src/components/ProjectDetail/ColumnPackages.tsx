import React from "react";

type ColumnPackagesProps = {
  children: React.ReactNode;
};

export const ColumnPackages: React.FC<ColumnPackagesProps> = ({ children }) => {
  return (
    <div className="[&_ul]:columns-2 [&_ul]:mt-6 [&_li]:text-2xl [&_li]:before:content-['✅'] [&_li]:before:pr-4 max-[700px]:[&_ul]:columns-1 max-[700px]:[&_li]:text-base max-[700px]:[&_li]:before:pr-2">
      {children}
    </div>
  );
};
