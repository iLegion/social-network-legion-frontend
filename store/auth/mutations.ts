import UserModel from "~/classes/Models/User/UserModel";
import { AuthStateStoreInterface } from "~/interfaces/store/auth/AuthStateStoreInterface";

export default {
  setUser(state: AuthStateStoreInterface, user: any) {
    state.user = user;
  },
  removeUser(state: AuthStateStoreInterface) {
    state.user = new UserModel();
  }
}
