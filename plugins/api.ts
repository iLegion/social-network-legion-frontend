import RegisterApi from "~/classes/Api/Auth/RegisterApi";
import LoginApi from "~/classes/Api/Auth/LoginApi";
import LogoutApi from "~/classes/Api/Auth/LogoutApi";
import UserApi from "~/classes/Api/UserApi";
import PostApi from "~/classes/Api/PostApi";
import DialogApi from "~/classes/Api/Dialog/DialogApi";
import DialogMessageApi from "~/classes/Api/Dialog/DialogMessageApi";
import LikeApi from "~/classes/Api/LikeApi";
import ViewApi from "~/classes/Api/ViewApi";
import FriendApi from "~/classes/Api/FriendApi";
import PrivacySettingApi from "~/classes/Api/PrivacySettingApi";
import { Api, Context } from "~/interfaces/plugins/api.interface";

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}

export default ({ app }: Context, inject: Function) => {
  const axios = app.$axios;

  inject('api', {
    register: new RegisterApi(axios),
    login: new LoginApi(axios),
    logout: new LogoutApi(axios),
    user: new UserApi(axios),
    post: new PostApi(axios),
    dialog: new DialogApi(axios),
    dialogMessage: new DialogMessageApi(axios),
    like: new LikeApi(axios),
    view: new ViewApi(axios),
    friend: new FriendApi(axios),
    privacySetting: new PrivacySettingApi(axios),
  })
}
