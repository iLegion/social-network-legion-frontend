import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export default {
  setUser({ commit } : any, user: UserInterface) {
    commit("setUser", user);
  },
  removeUser({ commit } : any) {
    commit("removeUser");
  }
}
