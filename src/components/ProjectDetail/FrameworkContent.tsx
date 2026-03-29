import React from "react";
import { FrameworkTypes } from "@services/CmsService";
import { FrameworkLogos } from "@components/FrameworkLogos";

type FrameworkContentProps = {
  frameworks: FrameworkTypes[];
};

export const FrameworkContent: React.FC<FrameworkContentProps> = ({
  frameworks,
}) => {
  return (
    <div className="gap-6 flex flex-col [&_div]:flex [&_div]:flex-row [&_div]:items-center [&_div]:gap-6 [&_svg]:w-12 [&_svg]:h-12 [&_h2]:text-2xl [&_h2]:font-medium max-[700px]:gap-4 max-[700px]:[&_div]:gap-4 max-[700px]:[&_svg]:w-8 max-[700px]:[&_svg]:h-8 max-[700px]:[&_h2]:text-[1.2rem]">
      {frameworks.map((framework, index) => (
        <div key={index}>
          <FrameworkLogos framework={framework} />
          <h2>{framework}</h2>
        </div>
      ))}
    </div>
  );
};
