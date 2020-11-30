import { takeLatest, call, put, all } from 'redux-saga/effects';
import { snackbarActionTypes } from '../snackbar/snackbarTypes';
import { userActionTypes } from './userTypes';
import { postSignInRequest, signOutRequest } from '../../services/userFetch';

export function* signInAsync({ payload }) {
  try {
    yield call(postSignInRequest, payload);
    yield put({
      type: userActionTypes.SET_CURRENT_USER,
      payload: payload.email,
    });
  } catch (error) {
    yield all([
      put({
        type: userActionTypes.SIGN_IN_FAIL,
      }),
      put({
        type: snackbarActionTypes.OPEN_SNACKBAR,
        payload: {
          severity: 'warning',
          message: error.message,
        },
      }),
    ]);
  }
}

export function* signInStart() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signInAsync);
}

export function* signOutAsync() {
  try {
    yield call(signOutRequest);
    yield put({
      type: userActionTypes.SIGN_OUT,
    });
  } catch (error) {
    console.log(error);
    yield all([
      put({
        type: userActionTypes.SIGN_OUT_FAIL,
      }),
      put({
        type: snackbarActionTypes.OPEN_SNACKBAR,
        payload: {
          severity: 'error',
          message: error.message,
        },
      }),
    ]);
  }
}

export function* signOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutAsync);
}

export function* userSagas() {
  yield all([call(signInStart), call(signOutStart)]);
}
