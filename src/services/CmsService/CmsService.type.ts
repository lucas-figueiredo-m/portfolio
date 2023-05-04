export type ExperiencesType = {
  id: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type AllExperiencesType = {
  allExperiences: ExperiencesType[];
};

export type WorksType = {
  id: string;
  company: string;
  jobType: string;
  role: string;
  slug: string;
  responsability: string;
  description: string;
  coverImage: {
    url: string;
  };
  topImage: {
    url: string;
  };
  bottomImage: {
    url: string;
  };
};

export type AllWorksType = {
  allWorks: WorksType[];
};

export type UniqueWorkType = {
  work: WorksType;
};
