import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { ExperiencesType } from "@services/CmsService";
import { SectionTitle } from "@components/SectionTitle";

type ExperiencesSectionType = {
  experiences: ExperiencesType[];
};

export const Experiences: React.FC<ExperiencesSectionType> = ({
  experiences,
}) => {
  return (
    <section className="w-full pb-32 border-b-[3px] border-[#8A3E37]">
      <SectionTitle title="Latest experiences" />
      <section className="w-full mt-28 flex gap-6 max-[1000px]:flex-col max-[1000px]:mt-20 max-[1000px]:gap-8">
        {experiences.map((item) => (
          <ExperienceItem
            key={item.id}
            from={item.startDate}
            to={item.endDate}
            title={item.company}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
};
