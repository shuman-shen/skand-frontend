import { createSelector } from 'reselect';

const selectSnackbar = (state) => state.snackbar;

export const selectSnackbarStatus = createSelector([selectSnackbar], (snackbar) => snackbar.open);
export const selectSnackbarSeverity = createSelector(
  [selectSnackbar],
  (snackbar) => snackbar.severity
);
export const selectSnackbarMessage = createSelector(
  [selectSnackbar],
  (snackbar) => snackbar.message
);
