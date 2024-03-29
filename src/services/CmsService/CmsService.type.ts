import { ObjectValues } from "@types";
import { Frameworks, Languages, ProjectTypes } from "./CmsService.const";

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

export type UniqueProjectType = {
  project: ProjectType;
};

export type ProjectTypesType = ObjectValues<typeof ProjectTypes>;
export type LanguageTypes = ObjectValues<typeof Languages>;
export type FrameworkTypes = ObjectValues<typeof Frameworks>;

export type AllProjects = {
  id: string;
  title: string;
  slug: string;
  coverImage: {
    url: string;
  };
  projectType: ProjectTypesType;
};

export type AllProjectsType = {
  allProjects: AllProjects[];
};

export type ProjectType = {
  id: string;
  title: string;
  coverImage: {
    url: string;
  };
  projectType: ProjectTypesType;
  language: LanguageTypes;
  description: string;
  frameworks: FrameworkTypes[];
  packages?: string[];
  github?: string;
  url?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  isPublic?: boolean;
  futureReleases?: string;
};
