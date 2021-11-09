import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export interface UserResponseInterface {
  data: UserInterface;
}

export interface UsersResponseInterface {
  data: UserInterface[];
  pagination: Object;
}
