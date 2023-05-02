import { RestServiceClass, ServiceUrls } from "@services/RestService";

const RestService = new RestServiceClass(ServiceUrls.github);

export class GithubClass {
  constructor(private restService: typeof RestService) {}

  async getUserRepos() {
    const params = {
      sort: "created",
      direction: "desc",
    };
    return this.restService.get("/users/lucas-figueiredo-m/repos", { params });
  }
}
