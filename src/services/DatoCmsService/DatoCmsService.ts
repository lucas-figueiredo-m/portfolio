import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { GetExperiences } from "./queries";
import { CmsProviderServiceAbstractClass } from "@services/interfaces";
import { AllExperiencesType } from "@services/CmsService";

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

  async getAllExperiences() {
    const response = await this.api.query<AllExperiencesType>({
      query: GetExperiences,
    });
    return response.data.allExperiences;
  }
}

export const DatoCmsService = new DatoCmsServiceClass();
