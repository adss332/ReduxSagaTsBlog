import { PostType } from "./PostType";

export interface FetchPostsSuccessResponseInterface extends Array<PostType> {
}

export interface PostsFailureResponseInterface {
  message: string;
}

export interface CreatePostSuccessResponseInterface extends PostType {
}

export interface UpdatePostSuccessResponseInterface extends PostType {
}
