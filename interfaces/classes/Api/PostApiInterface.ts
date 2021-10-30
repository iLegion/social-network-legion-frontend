import { PostInterface } from "~/interfaces/classes/Models/PostModelInterface";

export interface PostResponseInterface {
  data: PostInterface[];
  pagination: {
    count: number;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  }
}
