import UserModel from "~/classes/Models/User/UserModel";
import { AuthStateStoreInterface } from "~/interfaces/store/auth/AuthStateStoreInterface";

export default {
  isAuth(state: AuthStateStoreInterface): boolean {
    return !!state.user.id;
  },
  isLoading(state: AuthStateStoreInterface): boolean {
    return state.isLoading;
  },

  user(state: AuthStateStoreInterface): UserModel {
    return state.user;
  }
}
