import { Action } from 'redux';
import {
  CreatePostRequestInterface,
  UpdatePostRequestInterface,
  DeletePostRequestInterface
} from "./PostsCrudRequests";
import {
  PostsFailureResponseInterface,
  FetchPostsSuccessResponseInterface,
  CreatePostSuccessResponseInterface,
  UpdatePostSuccessResponseInterface
} from "./PostsCrudResponses";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS
} from "consts/posts/PostsConsts";

// Get
export interface FetchPostsRequestActionInterface extends Action<typeof FETCH_POSTS_REQUEST> {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessActionInterface extends Action<typeof FETCH_POSTS_SUCCESS> {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: FetchPostsSuccessResponseInterface;
}

export interface FetchPostsFailureActionInterface extends Action<typeof FETCH_POSTS_FAILURE> {
  type: typeof FETCH_POSTS_FAILURE;
  payload: PostsFailureResponseInterface;
}

//Delete
export interface DeletePostRequestActionInterface extends Action<typeof DELETE_POST_REQUEST> {
  type: typeof DELETE_POST_REQUEST;
  payload: DeletePostRequestInterface
}

export interface DeletePostSuccessActionInterface extends Action<typeof DELETE_POST_SUCCESS> {
  type: typeof DELETE_POST_SUCCESS;
  payload: {}
}

export interface DeletePostFailureActionInterface extends Action<typeof DELETE_POST_FAILURE> {
  type: typeof DELETE_POST_FAILURE;
  payload: PostsFailureResponseInterface
}

//Create
export interface CreatePostRequestActionInterface extends Action<typeof CREATE_POST_REQUEST> {
  type: typeof CREATE_POST_REQUEST;
  payload: CreatePostRequestInterface
}

export interface CreatePostSuccessActionInterface extends Action<typeof CREATE_POST_SUCCESS> {
  type: typeof CREATE_POST_SUCCESS;
  payload: CreatePostSuccessResponseInterface
}

export interface CreatePostFailureActionInterface extends Action<typeof CREATE_POST_FAILURE> {
  type: typeof CREATE_POST_FAILURE;
  payload: PostsFailureResponseInterface
}

//Update
export interface UpdatePostRequestActionInterface extends Action<typeof UPDATE_POST_REQUEST> {
  type: typeof UPDATE_POST_REQUEST;
  payload: UpdatePostRequestInterface
}

export interface UpdatePostSuccessActionInterface extends Action<typeof UPDATE_POST_SUCCESS> {
  type: typeof UPDATE_POST_SUCCESS;
  payload: UpdatePostSuccessResponseInterface
}

export interface UpdatePostFailureActionInterface extends Action<typeof UPDATE_POST_FAILURE> {
  type: typeof UPDATE_POST_FAILURE;
  payload: PostsFailureResponseInterface
}

export type PostsActions =
  CreatePostRequestActionInterface
  | CreatePostFailureActionInterface
  | CreatePostSuccessActionInterface
  | UpdatePostRequestActionInterface
  | UpdatePostFailureActionInterface
  | UpdatePostSuccessActionInterface
  | DeletePostRequestActionInterface
  | DeletePostFailureActionInterface
  | DeletePostSuccessActionInterface
  | FetchPostsRequestActionInterface
  | FetchPostsSuccessActionInterface
  | FetchPostsFailureActionInterface
  ;
