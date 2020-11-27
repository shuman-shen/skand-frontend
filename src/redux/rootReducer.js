import { combineReducers } from 'redux';
import indexReducer from './index/indexReducer';
import snackbarReducer from './snackbar/snackbarReducer';
import userReducer from './user/userReducer';

export default combineReducers({
  user: userReducer,
  index: indexReducer,
  snackbar: snackbarReducer,
});
