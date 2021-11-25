import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export interface PostInterface {
  createdAt: string;
  id: number;
  likesCount: number;
  text: string;
  author: UserInterface;
  title: string;
  updatedAt: string;
  viewsCount: number;
  commentsCount: number;
}
