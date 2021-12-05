import { AuthStateStoreInterface } from "~/interfaces/store/auth/AuthStateStoreInterface";
import UserModel from "~/classes/Models/User/UserModel";

export default {
  isAuth(state: AuthStateStoreInterface): boolean {
    return !!state.user.id;
  },

  user(state: AuthStateStoreInterface): UserModel {
    return state.user;
  }
}
