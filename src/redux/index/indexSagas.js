import { takeLatest, call, put, all } from 'redux-saga/effects';
import { snackbarActionTypes } from '../snackbar/snackbarTypes';
import { indexActionTypes } from './indexTypes';

const getUserIndexRequest = () => {
  const result = fetch('/api/v2/users', {
    method: 'get',
    headers: {
      authorization: localStorage.getItem('skandToken'),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json.users;
      }
    });

  return result;
};

export function* setIndexListAsync() {
  try {
    const result = yield call(getUserIndexRequest);
    //console.log(json);
    yield put({ type: indexActionTypes.SET_INDEX_LIST, payload: result });
  } catch (error) {
    yield all([
      put({ type: indexActionTypes.FETCH_INDEX_FAIL }),
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

export function* fetchIndexStart() {
  yield takeLatest(indexActionTypes.FETCH_INDEX_START, setIndexListAsync);
}

const postNewUserRequest = (user) => {
  const result = fetch('/api/v2/users', {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      authorization: localStorage.getItem('skandToken'),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json.users;
      }
    });
  return result;
};

export function* addNewUserAsync({ payload }) {
  try {
    const result = yield call(postNewUserRequest, payload);
    yield all([
      put({
        type: indexActionTypes.ADD_NEW_USER,
        payload: result,
      }),
      put({
        type: snackbarActionTypes.OPEN_SNACKBAR,
        payload: {
          severity: 'success',
          message: 'Success! New user record added.',
        },
      }),
    ]);
  } catch (error) {
    yield all([
      put({
        type: indexActionTypes.ADD_USER_FAIL,
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

export function* addNewUserStart() {
  yield takeLatest(indexActionTypes.ADD_USER_START, addNewUserAsync);
}

const patchUserRequest = (user) => {
  const result = fetch(`/api/v2/users/${user.id}`, {
    method: 'patch',
    body: JSON.stringify(user),
    headers: {
      authorization: localStorage.getItem('skandToken'),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json.users;
      }
    });
  return result;
};

export function* editUserAsync({ payload }) {
  try {
    const result = yield call(patchUserRequest, payload);
    console.log(result);
    yield all([
      put({
        type: indexActionTypes.EDIT_USER,
        payload: result,
      }),
      put({
        type: snackbarActionTypes.OPEN_SNACKBAR,
        payload: {
          severity: 'success',
          message: 'Success! User record updated.',
        },
      }),
    ]);
  } catch (error) {
    yield all([
      put({
        type: indexActionTypes.EDIT_USER_FAIL,
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

export function* editUserStart() {
  yield takeLatest(indexActionTypes.EDIT_USER_START, editUserAsync);
}

const deleteUserRequest = (user) => {
  const result = fetch(`/api/v2/users/${user.id}`, {
    method: 'delete',
    headers: {
      authorization: localStorage.getItem('skandToken'),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) throw Error(json.message);
      return json;
    });
  return result;
};

export function* deleteUserAsync({ payload }) {
  try {
    yield call(deleteUserRequest, payload);

    yield all([
      put({
        type: indexActionTypes.DELETE_USER,
        payload: payload,
      }),
      put({
        type: snackbarActionTypes.OPEN_SNACKBAR,
        payload: {
          severity: 'success',
          message: 'Success! User deleted.',
        },
      }),
    ]);
  } catch (error) {
    console.log(error);
    yield all([
      put({
        type: indexActionTypes.DELETE_USER_FAIL,
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

export function* deleteUserStart() {
  yield takeLatest(indexActionTypes.DELETE_USER_START, deleteUserAsync);
}

const getUserByIdRequest = (id) => {
  const result = fetch(`api/v2/users/${id}`, {
    method: 'get',
    headers: {
      authorization: localStorage.getItem('skandToken'),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json;
      }
    });

  return result;
};

export function* getUserByIdAsync() {
  try {
    const result = yield call(getUserByIdRequest);
    console.log(result);
    //yield put({ type: indexActionTypes.FETCH_USER_BY_ID, payload: result });
  } catch (error) {
    yield all([
      put({ type: indexActionTypes.FETCH_INDEX_FAIL }),
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

export function* getUserByIdStart() {
  yield takeLatest(indexActionTypes.FETCH_USER_BY_ID_START, getUserByIdAsync);
}

export function* indexSagas() {
  yield all([
    call(fetchIndexStart),
    call(addNewUserStart),
    call(editUserStart),
    call(deleteUserStart),
    call(getUserByIdStart),
  ]);
}
