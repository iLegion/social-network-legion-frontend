import { CommentInterface } from "~/interfaces/classes/Models/CommentModelInterface";

export interface CommentGetPayloadInterface {
  type: string;
  id: number;
}

export interface CommentStorePayloadInterface {
  type: string;
  id: number;
}

export interface CommentResponseInterface {
  data: CommentInterface;
}

export interface CommentsResponseInterface {
  data: CommentInterface[];
  pagination: {
    count: number;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  }
}
