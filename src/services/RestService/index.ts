import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

interface ReqParams<P> extends AxiosRequestConfig {
  params?: P;
}

type ObjectValues<T> = T[keyof T];
type DefaultParams = Record<string, never>;

export const ServiceUrls = {
  github: "https://api.github.com",
  local: "/api",
} as const;

export class RestServiceClass {
  constructor(private serviceUrl: ObjectValues<typeof ServiceUrls>) {}

  get api(): AxiosInstance {
    return this.restInstance();
  }

  private restInstance() {
    const instance = axios.create({ baseURL: this.serviceUrl });

    return instance;
  }

  async get<ResponseType, ReqParamsType = DefaultParams>(
    path: string,
    conf?: ReqParams<ReqParamsType>
  ): Promise<ResponseType> {
    try {
      const { data } = await this.api.get<ResponseType>(path, conf);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) throw error;
      else throw error;
    }
  }

  async post<RequestBodyType, ResponseType, ReqParamsType = DefaultParams>(
    path: string,
    requestBody: RequestBodyType,
    conf?: ReqParams<ReqParamsType>
  ): Promise<ResponseType> {
    try {
      const { data } = await this.api.post<ResponseType>(
        path,
        requestBody,
        conf
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) throw error;
      else throw error;
    }
  }
}
