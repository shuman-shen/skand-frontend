import { userActionTypes } from './userTypes';

export const signInStart = (user) => ({
  type: userActionTypes.SIGN_IN_START,
  payload: user,
});
export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const signInFail = () => ({
  type: userActionTypes.SIGN_IN_FAIL,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOut = () => ({
  type: userActionTypes.SIGN_OUT,
});
export const signOutFail = () => ({
  type: userActionTypes.SIGN_OUT_FAIL,
});
