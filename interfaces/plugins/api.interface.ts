import { NuxtAxiosInstance } from "@nuxtjs/axios";

import LoginApi from "~/classes/Api/Auth/LoginApi";
import LogoutApi from "~/classes/Api/Auth/LogoutApi";
import UserApi from "~/classes/Api/UserApi";
import PostApi from "~/classes/Api/PostApi";
import DialogApi from "~/classes/Api/Dialog/DialogApi";
import DialogMessageApi from "~/classes/Api/Dialog/DialogMessageApi";

export interface Context {
  app: {
    $axios: NuxtAxiosInstance;
  };
}

export interface Api {
  login: LoginApi;
  logout: LogoutApi;
  user: UserApi;
  post: PostApi;
  dialog: DialogApi;
  dialogMessage: DialogMessageApi;
}
