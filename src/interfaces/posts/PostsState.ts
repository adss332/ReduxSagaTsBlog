import { PostType } from "./PostType";

export interface PostsState {
  posts: PostType[];
  successMessage: string | null,
  isLoading: boolean;
  error: string | null;
}