import { AuthStateStoreInterface } from "~/interfaces/store/auth/AuthStateStoreInterface";

export default {
  user(state: AuthStateStoreInterface) {
    return state.user;
  },
  isAuth(state: AuthStateStoreInterface): boolean {
    return !!Object.keys(state.user).length;
  }
}
