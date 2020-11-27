export const closeSnackbar = () => ({
  type: 'CLOSE_SNACKBAR',
});

export const openSnackbar = (info) => ({
  type: 'OPEN_SNACKBAR',
  payload: info,
});
