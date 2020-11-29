import { snackbarActionTypes } from './snackbarTypes';

export const closeSnackbar = () => ({
  type: snackbarActionTypes.CLOSE_SNACKBAR,
});

export const openSnackbar = (info) => ({
  type: snackbarActionTypes.OPEN_SNACKBAR,
  payload: info,
});
