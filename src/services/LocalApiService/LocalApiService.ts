import { RestServiceClass, ServiceUrls } from "@services/RestService";
import { ContactFormType } from "@types";

const RestService = new RestServiceClass(ServiceUrls.local);

class LocalApiServiceClass {
  constructor(private restService: typeof RestService) {}

  async sendContactMail(mailData: ContactFormType) {
    return this.restService.post<ContactFormType, void>("/contact", mailData);
  }
}

export const LocalApiService = new LocalApiServiceClass(RestService);
