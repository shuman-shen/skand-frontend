import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import indexReducer from './index/indexReducer';
import snackbarReducer from './snackbar/snackbarReducer';
import userReducer from './user/userReducer';

const persistConfig = {
  key: 'skandUser',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  index: indexReducer,
  snackbar: snackbarReducer,
});

export default persistReducer(persistConfig, rootReducer);
