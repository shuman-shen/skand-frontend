import { snackbarActionTypes } from './snackbarTypes';

const INITIAL_STATE = {
  open: false,
  severity: 'info',
  message: 'Welcome.',
};

const snackbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case snackbarActionTypes.OPEN_SNACKBAR:
      return {
        ...state,
        severity: action.payload.severity,
        message: action.payload.message,
        open: true,
      };
    case snackbarActionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
