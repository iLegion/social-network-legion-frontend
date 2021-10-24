import { NuxtAxiosInstance } from "@nuxtjs/axios";

import LoginApi from "~/classes/Api/Auth/LoginApi";
import UserApi from "~/classes/Api/UserApi";

export interface Context {
  app: {
    $axios: NuxtAxiosInstance;
  };
}

export interface Api {
  login: LoginApi;
  user: UserApi;
}
