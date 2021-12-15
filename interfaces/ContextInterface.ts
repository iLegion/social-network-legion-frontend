import { Api } from "~/interfaces/plugins/api.interface";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

export interface ContextInterface {
  $api: Api;
  $axios: NuxtAxiosInstance;
  $config: any;
  redirect: Function;
  route: any;
  store: any;
}
