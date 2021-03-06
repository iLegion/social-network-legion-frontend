import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export interface UserResponseInterface {
  data: UserInterface;
}

export interface UsersResponseInterface {
  data: UserInterface[];
  pagination: Object;
}

export interface UsersGetPayloadInterface {
  page?: number;
  byPostsCount?: number;
  byFriendsCount?: number;
}

export interface UserUpdatePayloadInterface {
  name?: string;
  email?: string;
  password?: string;
}

// export interface UserAvatarUpdatePayloadInterface {
//   file: any;
// }
