import React from "react";

type SectionTitleProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <h1 className="text-white text-[4.5rem] max-[1000px]:text-[2.5rem] max-[500px]:text-[1.8rem]">
        #{title}
      </h1>
      {description && (
        <h2 className="text-white font-light text-[3.5rem] max-[1000px]:text-[1.8rem] max-[500px]:text-[1.2rem]">
          {description}
        </h2>
      )}
    </div>
  );
};
