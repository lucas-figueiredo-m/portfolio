export type ExperiencesType = {
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type AllExperiencesType = {
  allExperiences: ExperiencesType[];
};
