import { call, put, takeLatest } from 'redux-saga/effects';
import {
  updatePostSuccess,
  updatePostFailure,
  createPostSuccess,
  createPostFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  deletePostFailure,
  deletePostSuccess
} from '../actions/postsActions';
import {
  FetchPostsRequestActionInterface,
  UpdatePostRequestActionInterface,
  CreatePostRequestActionInterface,
  DeletePostRequestActionInterface,
} from 'interfaces/posts/PostsActions'
import {
  FetchPostsSuccessResponseInterface,
  CreatePostSuccessResponseInterface,
  UpdatePostSuccessResponseInterface
} from "interfaces/posts/PostsCrudResponses";
import { deletePostRequest, getPostsRequest, createPostRequest, updatePostRequest } from "api/posts/PostsApi";
import { Action } from "redux";
import {
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  FETCH_POSTS_REQUEST,
  UPDATE_POST_REQUEST
} from "consts/posts/PostsConsts";


function* updatePostHandler(action: Action<typeof UPDATE_POST_REQUEST> & UpdatePostRequestActionInterface): Generator {
  try {
    const data = action.payload;
    const response = (yield call(updatePostRequest, data)) as UpdatePostSuccessResponseInterface;
    yield put(updatePostSuccess(response));
    // yield put(fetchPostsRequest());
  } catch (error) {
    yield put(updatePostFailure('error update post'));
  }
}

function* createPostHandler(action: Action<typeof CREATE_POST_REQUEST> & CreatePostRequestActionInterface): Generator {
  try {
    const data = action.payload;
    const response = (yield call(createPostRequest, data)) as CreatePostSuccessResponseInterface;
    yield put(createPostSuccess(response));
    // yield put(fetchPostsRequest());
  } catch (error) {
    yield put(createPostFailure('error create post'));
  }
}

function* deletePostHandler(action: Action<typeof DELETE_POST_REQUEST> & DeletePostRequestActionInterface): Generator {
  try {
    const { id } = action.payload;
    const response = (yield call(deletePostRequest, id)) as {};
    yield put(deletePostSuccess(response));
    yield put(fetchPostsRequest());
  } catch (error) {
    yield put(deletePostFailure('error delete post'));
  }
}

function* fetchPostsHandler(action: Action<typeof FETCH_POSTS_REQUEST> & FetchPostsRequestActionInterface): Generator {
  try {
    const response = (yield call(getPostsRequest)) as FetchPostsSuccessResponseInterface;
    yield put(fetchPostsSuccess(response));
  } catch (error) {
    yield put(fetchPostsFailure('error fetch posts'));
  }
}

export function* postsSaga(): Generator {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsHandler);
  yield takeLatest(DELETE_POST_REQUEST, deletePostHandler);
  yield takeLatest(CREATE_POST_REQUEST, createPostHandler);
  yield takeLatest(UPDATE_POST_REQUEST, updatePostHandler);
}