import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import {
  GetAllProjects,
  GetExperiences,
  GetUniqueProject,
  GetUniqueWork,
  GetWorks,
} from "./queries";
import { CmsProviderServiceAbstractClass } from "@services/interfaces";
import {
  AllExperiencesType,
  AllProjects,
  AllProjectsType,
  AllWorksType,
  ExperiencesType,
  ProjectType,
  UniqueProjectType,
  UniqueWorkType,
  WorksType,
} from "@services/CmsService";

export type DatoCmsApi = ApolloClient<NormalizedCacheObject>;

export class DatoCmsServiceClass extends CmsProviderServiceAbstractClass<DatoCmsApi> {
  protected get api() {
    const client = new ApolloClient({
      uri: process.env.DATO_CMS_ENDPOINT,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${process.env.DATO_CMS_TOKEN}`,
      },
    });

    return client;
  }

  async getAllExperiences(): Promise<ExperiencesType[]> {
    const response = await this.api.query<AllExperiencesType>({
      query: GetExperiences,
    });
    return response.data.allExperiences;
  }

  async getAllWorks(): Promise<WorksType[]> {
    const response = await this.api.query<AllWorksType>({
      query: GetWorks,
    });

    return response.data.allWorks;
  }

  public async getUniqueWork(slug: string): Promise<WorksType> {
    const response = await this.api.query<UniqueWorkType>({
      query: GetUniqueWork(slug),
    });

    return response.data.work;
  }

  public async getAllProjects(): Promise<AllProjects[]> {
    const response = await this.api.query<AllProjectsType>({
      query: GetAllProjects,
    });

    return response.data.allProjects;
  }

  public async getUniqueProject(slug: string): Promise<ProjectType> {
    const response = await this.api.query<UniqueProjectType>({
      query: GetUniqueProject(slug),
    });

    return response.data.project;
  }
}

export const DatoCmsService = new DatoCmsServiceClass();
