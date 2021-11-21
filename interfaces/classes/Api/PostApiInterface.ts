import { PostInterface } from "~/interfaces/classes/Models/PostModelInterface";

export interface PostsResponseInterface {
  data: PostInterface[];
  pagination: {
    count: number;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  }
}
