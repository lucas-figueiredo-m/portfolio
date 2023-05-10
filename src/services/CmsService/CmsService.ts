import { DatoCmsService, DatoCmsApi } from "@services/DatoCmsService";
import {
  CmsProviderServiceAbstractClass,
  CmsServiceAbstractClass,
} from "@services/interfaces";
import {
  AllProjects,
  ExperiencesType,
  ProjectType,
  WorksType,
} from "./CmsService.type";

class CmsServiceClass extends CmsServiceAbstractClass<DatoCmsApi> {
  constructor(private cmsService: CmsProviderServiceAbstractClass<DatoCmsApi>) {
    super(cmsService);
  }

  public async getAllExperiences(): Promise<ExperiencesType[]> {
    return this.cmsService.getAllExperiences();
  }

  public async getAllWorks(): Promise<WorksType[]> {
    return this.cmsService.getAllWorks();
  }

  public async getUniqueWork(slug: string): Promise<WorksType> {
    return this.cmsService.getUniqueWork(slug);
  }

  public async getAllProjects(): Promise<AllProjects[]> {
    return this.cmsService.getAllProjects();
  }

  public getUniqueProject(slug: string): Promise<ProjectType> {
    return this.cmsService.getUniqueProject(slug);
  }
}

export const CmsService = new CmsServiceClass(DatoCmsService);
