import { all, fork } from 'redux-saga/effects';
import { postsSagaWatcher } from './postsSaga';

function* rootSaga() {
  yield all([ fork(postsSagaWatcher) ]);
}

export default rootSaga;
