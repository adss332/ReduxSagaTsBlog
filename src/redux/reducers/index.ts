import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { PostsState } from 'interfaces/posts/PostsState';

export interface RootState {
  posts: PostsState;
}

const rootReducer = combineReducers<RootState>({
  posts: postsReducer
});

export default rootReducer;