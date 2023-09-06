import { PostOperationInterface } from "./PostOperationInterface";

export interface CreatePostRequestInterface extends PostOperationInterface {
}

export interface DeletePostRequestInterface {
  id: number;
}

export interface UpdatePostRequestInterface extends PostOperationInterface {
  postId: number;
}