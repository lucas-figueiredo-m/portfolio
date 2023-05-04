import { DatoCmsService, DatoCmsApi } from "@services/DatoCmsService";
import {
  CmsProviderServiceAbstractClass,
  CmsServiceAbstractClass,
} from "@services/interfaces";
import { ExperiencesType, WorksType } from "./CmsService.type";

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
}

export const CmsService = new CmsServiceClass(DatoCmsService);
