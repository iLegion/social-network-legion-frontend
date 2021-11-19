import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { AxiosError, Method } from "axios";

import ValidationError from "~/classes/Errors/ValidationError";

export default abstract class BaseApi {
  protected abstract uri: string;
  protected api: NuxtAxiosInstance;

  constructor(axios: NuxtAxiosInstance) {
    this.api = axios;
  }

  protected async callToApi(type: Method, uri: string, params?: Object, data?: Object): Promise<Promise<Object> | any> {
    return await this.api.$request({
      method: type,
      url: uri,
      params: params,
      data: data
    }).catch((e: AxiosError) => {
      if (e.response?.status === 422) {
        throw new ValidationError(e.response);
      }

      throw new Error('[BaseApi->callToApi] Unknown error.');
    });
  }
}
