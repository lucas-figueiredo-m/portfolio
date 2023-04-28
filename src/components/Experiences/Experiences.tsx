import React from "react";
import { ExperienceContainer } from "./styles";
import { ExperienceItem } from "./ExperienceItem";

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

export const Experiences: React.FC = () => {
  return (
    <ExperienceContainer>
      <section>
        {previousExperiences.map((item, index) => (
          <ExperienceItem
            key={index.toString()}
            from={item.from}
            to={item.to}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </ExperienceContainer>
  );
};
