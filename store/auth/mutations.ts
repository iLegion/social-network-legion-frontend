import UserModel from "~/classes/Models/User/UserModel";
import { AuthStateStoreInterface } from "~/interfaces/store/auth/AuthStateStoreInterface";

export default {
  updateLoadingStatus(state: AuthStateStoreInterface, status: boolean) {
    state.isLoading = status;
  },

  setUser(state: AuthStateStoreInterface, user: UserModel) {
    state.user = user;
  },
  removeUser(state: AuthStateStoreInterface) {
    state.user = new UserModel();
  }
}
