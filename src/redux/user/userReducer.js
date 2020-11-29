import { userActionTypes } from './userTypes';
import { INITIAL_STATE as INDEX_INITIAL_STATE } from '../index/indexReducer';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.SIGN_OUT:
      return {
        ...state,
        ...INITIAL_STATE,
        ...INDEX_INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default userReducer;
