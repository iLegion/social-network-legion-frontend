import { PostInterface } from "~/interfaces/classes/Models/PostModelInterface";

export interface PostResponseInterface {
  data: PostInterface;
}

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

export interface PostsGetPayloadInterface {
  byLikes?: number;
  byViews?: number;
  userId?: number;
}

export interface PostCreatePayloadInterface {
  title: string;
  text: string;
}

export interface PostUpdatePayloadInterface {
  title: string;
  text: string;
}
