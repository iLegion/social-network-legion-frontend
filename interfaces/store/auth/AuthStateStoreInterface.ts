import UserModel from "~/classes/Models/User/UserModel";

export interface AuthStateStoreInterface {
  isLoading: boolean;
  user: UserModel;
}
