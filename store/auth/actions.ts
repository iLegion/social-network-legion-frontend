import UserModel from "~/classes/Models/User/UserModel";
import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export default {
  updateLoadingStatus({ commit } : any, status: boolean) {
    commit("updateLoadingStatus", status);
  },

  setUser({ commit } : any, user: UserInterface) {
    commit("setUser", new UserModel(user));
  },
  removeUser({ commit } : any) {
    commit("removeUser");
  }
}
