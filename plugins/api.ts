import LoginApi from "~/classes/Api/Auth/LoginApi";
import LogoutApi from "~/classes/Api/Auth/LogoutApi";
import UserApi from "~/classes/Api/UserApi";
import PostApi from "~/classes/Api/PostApi";
import { Api, Context } from "~/interfaces/plugins/api.interface";

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}

export default ({ app }: Context, inject: Function) => {
  const axios = app.$axios;

  inject('api', {
    login: new LoginApi(axios),
    logout: new LogoutApi(axios),
    user: new UserApi(axios),
    post: new PostApi(axios)
  })
}
