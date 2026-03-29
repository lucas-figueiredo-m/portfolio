import React from "react";

type ExpertiseItemProps = {
  icon: React.ReactNode;
  label: string | React.ReactNode;
  hoverColor: string;
};

export const ExpertiseItem: React.FC<ExpertiseItemProps> = ({
  icon,
  label,
  hoverColor,
}) => {
  return (
    <div
      className="group flex-1 flex flex-col items-center mt-12 [&>svg]:w-16 [&>svg]:h-16 [&>svg]:fill-white [&>svg]:transition-all [&>svg]:duration-500 max-[700px]:[&>svg]:w-12 max-[700px]:[&>svg]:h-12"
      style={{ "--hover-color": hoverColor } as React.CSSProperties}
    >
      <div className="[&>svg]:w-16 [&>svg]:h-16 [&>svg]:fill-white [&>svg]:transition-all [&>svg]:duration-500 hover:[&>svg]:fill-[var(--hover-color)] max-[700px]:[&>svg]:w-12 max-[700px]:[&>svg]:h-12 peer">
        {icon}
      </div>
      <h2 className="mt-3 font-medium transition-all duration-500 text-[2rem] max-[700px]:text-[1.2rem] peer-hover:text-[var(--hover-color)]">
        {label}
      </h2>
    </div>
  );
};
