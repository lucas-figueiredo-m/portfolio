import { DatoCmsService, DatoCmsApi } from "@services/DatoCmsService";
import {
  CmsProviderServiceAbstractClass,
  CmsServiceAbstractClass,
} from "@services/interfaces";
import { ExperiencesType } from "./CmsService.type";

class CmsServiceClass extends CmsServiceAbstractClass<DatoCmsApi> {
  constructor(private cmsService: CmsProviderServiceAbstractClass<DatoCmsApi>) {
    super(cmsService);
  }

  public async getAllExperiences(): Promise<ExperiencesType[]> {
    return this.cmsService.getAllExperiences();
  }
}

export const CmsService = new CmsServiceClass(DatoCmsService);
