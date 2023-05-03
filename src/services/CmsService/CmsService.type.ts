export type ExperiencesType = {
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type AllExperiencesType = {
  allExperiences: ExperiencesType[];
};

export type WorksType = {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
};

export type AllWorksType = {
  allWorks: WorksType[];
};
