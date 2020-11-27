const INITIAL_STATE = {
  open: true,
  severity: 'info',
  message: 'Welcome.',
};

const snackbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        severity: action.payload.type,
        message: action.payload.message,
        open: true,
      };
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
