import UserModel from "~/classes/Models/User/UserModel";

export default () => ({
  isLoading: true,
  user: new UserModel()
});
