import { all, call } from 'redux-saga/effects';
import { indexSagas } from './index/indexSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
  yield all([call(indexSagas), call(userSagas)]);
}
