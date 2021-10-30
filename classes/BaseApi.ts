import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { AxiosError, Method } from "axios";

import ValidationError from "~/classes/Errors/ValidationError";

export default class BaseApi {
  protected api: NuxtAxiosInstance;

  constructor(axios: NuxtAxiosInstance) {
    this.api = axios;
  }

  protected async callToApi(uri: string, type: Method, params?: Object): Promise<Promise<Object> | any> {
    return await this.api.$request({
      url: uri,
      method: type,
      params: params
    }).catch((e: AxiosError) => {
      if (e.response?.status === 422) {
        throw new ValidationError(e.response);
      }

      throw new Error('[BaseApi->callToApi] Unknown error.');
    });
  }
}
