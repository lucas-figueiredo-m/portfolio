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
    <>
      {frameworks.map((framework, index) => (
        <div
          key={index}
          className="flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 [&_svg]:h-5 [&_svg]:w-5"
        >
          <FrameworkLogos framework={framework} />
          <span className="text-sm font-medium text-text-secondary">
            {framework}
          </span>
        </div>
      ))}
    </>
  );
};
