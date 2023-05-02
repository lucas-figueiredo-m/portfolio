import { ExperiencesType } from "@services/CmsService";

export abstract class CmsProviderServiceAbstractClass<ApiType> {
  protected abstract get api(): ApiType;
  public abstract getAllExperiences(): Promise<ExperiencesType[]>;
}

export abstract class CmsServiceAbstractClass<ApiType> {
  constructor(private cmsProvider: CmsProviderServiceAbstractClass<ApiType>) {}
  public abstract getAllExperiences(): Promise<ExperiencesType[]>;
}
