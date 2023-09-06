import { all, fork } from 'redux-saga/effects';
import { postsSaga } from './postsSaga';

function* rootSaga() {
  yield all([ fork(postsSaga) ]);
}

export default rootSaga;
