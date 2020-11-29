import { takeLatest, call, put, all } from 'redux-saga/effects';
import { snackbarActionTypes } from '../snackbar/snackbarTypes';
import { userActionTypes } from './userTypes';

const postSignInRequest = (user) => {
  const result = fetch('/api/v2/users/tokens', {
    method: 'post',
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        localStorage.setItem('skandToken', res.headers.map.authorization);

        return res;
      }
      return res.json();
    })
    .then((json) => {
      if (json.message) throw Error(json.message);
    });
  return result;
};

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

const signOutRequest = () => {
  const result = fetch(`/api/v2/users/tokens`, {
    method: 'delete',
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) throw Error(json.message);
      localStorage.removeItem('skandToken');
      localStorage.removeItem('persist:skandUser');
      return json;
    });
  return result;
};

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
