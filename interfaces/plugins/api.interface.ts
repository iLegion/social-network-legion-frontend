import { NuxtAxiosInstance } from "@nuxtjs/axios";

import RegisterApi from "~/classes/Api/Auth/RegisterApi";
import UserApi from "~/classes/Api/UserApi";
import PostApi from "~/classes/Api/PostApi";
import DialogApi from "~/classes/Api/Dialog/DialogApi";
import DialogMessageApi from "~/classes/Api/Dialog/DialogMessageApi";
import LikeApi from "~/classes/Api/LikeApi";
import ViewApi from "~/classes/Api/ViewApi";
import FriendApi from "~/classes/Api/FriendApi";
import PrivacySettingApi from "~/classes/Api/PrivacySettingApi";
import CommentApi from "~/classes/Api/CommentApi";

export interface Context {
  app: {
    $axios: NuxtAxiosInstance;
  };
}

export interface Api {
  register: RegisterApi;
  user: UserApi;
  post: PostApi;
  dialog: DialogApi;
  dialogMessage: DialogMessageApi;
  like: LikeApi;
  view: ViewApi;
  friend: FriendApi;
  privacySetting: PrivacySettingApi;
  comment: CommentApi;
}
