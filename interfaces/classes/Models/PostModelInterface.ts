import { OutputBlockData } from "@editorjs/editorjs/types/data-formats/output-data";

import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export interface PostInterface {
  createdAt: string;
  id: number;
  image: string;
  likesCount: number;
  text: OutputBlockData[];
  author: UserInterface;
  title: string;
  updatedAt: string;
  viewsCount: number;
  commentsCount: number;
}
