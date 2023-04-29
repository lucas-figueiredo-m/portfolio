import React from "react";
import { ExperienceContainer } from "./styles";
import { ExperienceItem } from "./ExperienceItem";
import { ExperiencesType } from "@services/CmsService";

const previousExperiences = [
  {
    from: "2020",
    to: "2021",
    title: "Senior Mobile Engineer",
    description: "Lorem ipsum sit dolor amet",
  },
  {
    from: "2020",
    to: "2021",
    title: "Senior Mobile Engineer",
    description: "Lorem ipsum sit dolor amet",
  },
  {
    from: "2020",
    to: "2021",
    title: "Senior Mobile Engineer",
    description: "Lorem ipsum sit dolor amet",
  },
  {
    from: "2020",
    to: "2021",
    title: "Senior Mobile Engineer",
    description: "Lorem ipsum sit dolor amet",
  },
];
type ExperiencesSectionType = {
  experiences: ExperiencesType[];
};

export const Experiences: React.FC<ExperiencesSectionType> = ({
  experiences,
}) => {
  return (
    <ExperienceContainer>
      <section>
        {experiences.map((item, index) => (
          <ExperienceItem
            key={index.toString()}
            from={item.startDate}
            to={item.endDate}
            title={item.company}
            description={item.description}
          />
        ))}
      </section>
    </ExperienceContainer>
  );
};