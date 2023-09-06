import {
  PostsActions,
} from 'interfaces/posts/PostsActions';
import {
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from 'consts/posts/PostsConsts';
import {
  PostType,
} from 'interfaces/posts/PostType';
import { PostsState } from 'interfaces/posts/PostsState';

const initialState: PostsState = {
  posts: [],
  successMessage: null,
  isLoading: false,
  error: null,
};

export const postsReducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    case CREATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        error: null,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [ action.payload, ...state.posts ],
        successMessage: 'Post created!'
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        error: 'Post was not created',
      };
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        error: null,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.map(p => p.id === action.payload.id ? action.payload : p) as PostType[],
        successMessage: 'Post updated!',
        error: null
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        error: 'Post was not updated',
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        error: null,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successMessage: 'Post deleted',
        error: null,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        error: 'Post was not deleted',
      };
    default:
      return state;
  }
};

export default postsReducer;