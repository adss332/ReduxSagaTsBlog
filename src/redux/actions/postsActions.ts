import {
  UpdatePostRequestActionInterface,
  UpdatePostSuccessActionInterface,
  UpdatePostFailureActionInterface,
  CreatePostRequestActionInterface,
  CreatePostSuccessActionInterface,
  CreatePostFailureActionInterface,
  DeletePostRequestActionInterface,
  DeletePostSuccessActionInterface,
  DeletePostFailureActionInterface,
  FetchPostsRequestActionInterface,
  FetchPostsSuccessActionInterface,
  FetchPostsFailureActionInterface,
} from 'interfaces/posts/PostsActions';
import {
  UpdatePostSuccessResponseInterface,
  CreatePostSuccessResponseInterface,
  FetchPostsSuccessResponseInterface,
} from "interfaces/posts/PostsCrudResponses";
import {
  UpdatePostRequestInterface,
  CreatePostRequestInterface,
  DeletePostRequestInterface,
} from "interfaces/posts/PostsCrudRequests";
import {
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from 'consts/posts/PostsConsts'

export const updatePostRequest = (data: UpdatePostRequestInterface): UpdatePostRequestActionInterface => ({
  type: UPDATE_POST_REQUEST,
  payload: data
});

export const updatePostSuccess = (data: UpdatePostSuccessResponseInterface): UpdatePostSuccessActionInterface => ({
  type: UPDATE_POST_SUCCESS,
  payload: data
});

export const updatePostFailure = (error: string): UpdatePostFailureActionInterface => ({
  type: UPDATE_POST_FAILURE,
  payload: {
    message: error
  },
});

export const createPostRequest = (data: CreatePostRequestInterface): CreatePostRequestActionInterface => ({
  type: CREATE_POST_REQUEST,
  payload: data
});

export const createPostSuccess = (data: CreatePostSuccessResponseInterface): CreatePostSuccessActionInterface => ({
  type: CREATE_POST_SUCCESS,
  payload: data
});

export const createPostFailure = (error: string): CreatePostFailureActionInterface => ({
  type: CREATE_POST_FAILURE,
  payload: {
    message: error
  },
});

export const deletePostRequest = (data: DeletePostRequestInterface): DeletePostRequestActionInterface => ({
  type: DELETE_POST_REQUEST,
  payload: data
});

export const deletePostSuccess = (data: {}): DeletePostSuccessActionInterface => ({
  type: DELETE_POST_SUCCESS,
  payload: data
});

export const deletePostFailure = (error: string): DeletePostFailureActionInterface => ({
  type: DELETE_POST_FAILURE,
  payload: {
    message: error
  },
});

export const fetchPostsRequest = (): FetchPostsRequestActionInterface => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (data: FetchPostsSuccessResponseInterface): FetchPostsSuccessActionInterface => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsFailure = (error: string): FetchPostsFailureActionInterface => ({
  type: FETCH_POSTS_FAILURE,
  payload: {
    message: error
  },
});


