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
    <section id="experience" className="w-full py-24">
      <SectionTitle label="EXPERIENCE" title="Latest experiences" />
      <div className="w-full mt-12 space-y-1">
        {experiences.map((item) => (
          <ExperienceItem
            key={item.id}
            from={item.startDate}
            to={item.endDate}
            title={item.company}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
