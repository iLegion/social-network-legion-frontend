import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export interface CommentInterface {
  createdAt: string;
  id: number;
  text: string;
  updatedAt: string;
  user: UserInterface;
}
