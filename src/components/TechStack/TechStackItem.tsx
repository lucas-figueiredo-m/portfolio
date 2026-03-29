import React from "react";
import { TechStackData } from "./TechStack.type";

type TechStackItemProps = {
  tech: TechStackData;
  isLast?: boolean;
};

export const TechStackItem: React.FC<TechStackItemProps> = ({ tech, isLast = false }) => {
  const { icon, title, description, frameworks, devTools } = tech;

  return (
    <div
      className={`flex flex-1 flex-col items-center px-12 max-[800px]:px-0 max-[800px]:pb-12 ${
        !isLast
          ? "min-[801px]:border-r-2 min-[801px]:border-r-[#FF2D19] max-[800px]:border-b-2 max-[800px]:border-b-[#FF2D19]"
          : ""
      }`}
    >
      <div className="w-20 h-20 rounded-full bg-[#FF2D19] flex items-center justify-center">
        {icon}
      </div>

      <h2 className="text-[1.75rem] mt-4 text-center text-[#FF2D19]">{title}</h2>
      <p className="text-[1.25rem] text-center text-black">{description}</p>

      <h3 className="text-2xl font-medium text-[#73140B] mt-16 mb-3">Technologies:</h3>
      <p className="text-[1.25rem] text-center text-black">{frameworks.join(", ")}</p>

      <h3 className="text-2xl font-medium text-[#73140B] mt-16 mb-3">Related Dev Tools:</h3>
      {devTools.map((tool, index) => (
        <p key={index.toString()} className="text-[1.25rem] text-center text-black">
          {tool}
        </p>
      ))}
    </div>
  );
};
