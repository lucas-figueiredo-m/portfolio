import React from "react";
import { dateUtils } from "@utils";

type ExperienceItemProps = {
  from: string;
  to: string;
  title: string;
  description: string;
};

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  from,
  to,
  title,
  description,
}) => {
  const fromText = dateUtils.format.yearOnly(from);
  const toText = dateUtils.format.yearOnly(to);
  return (
    <div className="group flex flex-1 even:*:mt-16 max-[1000px]:even:*:mt-0">
      <div
        className={[
          "bg-gradient-to-b from-[#400B06] to-black p-4 pt-10 h-80 flex flex-col items-start justify-start flex-1",
          "transition-all duration-500 group-hover:brightness-[1.3] group-hover:-translate-y-5",
          "max-[1000px]:h-auto max-[1000px]:p-8 max-[1000px]:group-hover:translate-y-0",
          "max-[700px]:h-60 max-[700px]:pt-6",
        ].join(" ")}
      >
        <h1 className="text-[#FF2D19] text-[2.5rem] mb-6 font-semibold max-[1000px]:text-[2.2rem] max-[700px]:text-[1.2rem] max-[700px]:mb-4">
          {`${fromText} - ${toText}`}
        </h1>
        <h2 className="text-white text-[2rem] mb-4 font-medium max-[1000px]:text-[1.7rem] max-[700px]:text-[1rem]">
          {title}
        </h2>
        <p className="text-white text-[1.2rem] font-normal text-justify max-[700px]:text-[0.9rem]">
          {description}
        </p>
      </div>
    </div>
  );
};
