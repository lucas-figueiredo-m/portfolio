import {
  AllProjects,
  ExperiencesType,
  WorksType,
  ProjectType,
} from "@services/CmsService";

export abstract class CmsProviderServiceAbstractClass<ApiType> {
  protected abstract get api(): ApiType;
  public abstract getAllExperiences(): Promise<ExperiencesType[]>;
  public abstract getAllWorks(): Promise<WorksType[]>;
  public abstract getUniqueWork(slug: string): Promise<WorksType>;
  public abstract getAllProjects(): Promise<AllProjects[]>;
  public abstract getUniqueProject(slug: string): Promise<ProjectType>;
}

export abstract class CmsServiceAbstractClass<ApiType> {
  constructor(private cmsProvider: CmsProviderServiceAbstractClass<ApiType>) {}
  public abstract getAllExperiences(): Promise<ExperiencesType[]>;
  public abstract getAllWorks(): Promise<WorksType[]>;
  public abstract getUniqueWork(slug: string): Promise<WorksType>;
  public abstract getAllProjects(): Promise<AllProjects[]>;
  public abstract getUniqueProject(slug: string): Promise<ProjectType>;
}
