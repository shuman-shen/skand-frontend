import { indexActionTypes } from './indexTypes';

export const fetchIndexStart = () => ({
  type: indexActionTypes.FETCH_INDEX_START,
});

export const setIndexList = (list) => ({
  type: indexActionTypes.SET_INDEX_LIST,
  payload: list,
});

export const fetchIndexFail = () => ({
  type: indexActionTypes.FETCH_INDEX_FAIL,
  //payload: errorMessage,
});

export const fetchUserByIdStart = (id) => ({
  type: indexActionTypes.FETCH_USER_BY_ID_START,
  payload: id,
});

export const fetchUserById = (user) => ({
  type: indexActionTypes.FETCH_USER_BY_ID,
  payload: user,
});

export const fetchUserByIdFail = () => ({
  type: indexActionTypes.FETCH_USER_BY_ID_FAIL,
});

export const addNewUserStart = (newUser) => ({
  type: indexActionTypes.ADD_USER_START,
  payload: newUser,
});

export const addNewUser = (newUser) => ({
  type: indexActionTypes.ADD_NEW_USER,
  payload: newUser,
});

export const addNewUserFail = () => ({
  type: indexActionTypes.ADD_USER_FAIL,
  //payload: errorMessage,
});

export const editUserStart = (user) => ({
  type: indexActionTypes.EDIT_USER_START,
  payload: user,
});
export const editUser = (user) => ({
  type: indexActionTypes.EDIT_USER,
  payload: user,
});
export const editUserFail = () => ({
  type: indexActionTypes.EDIT_USER_FAIL,
  //payload: errorMessage,
});

export const deleteUserStart = (user) => ({
  type: indexActionTypes.DELETE_USER_START,
  payload: user,
});

export const deleteUser = (user) => ({
  type: indexActionTypes.DELETE_USER,
  payload: user,
});

export const deleteUserFail = () => ({
  type: indexActionTypes.DELETE_USER_FAIL,
  //payload: errorMessage,
});
