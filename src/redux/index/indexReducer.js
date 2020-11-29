import { indexActionTypes } from './indexTypes';

export const INITIAL_STATE = {
  list: [],
  isLoading: false,
  currentItem: {},
  //errorMessage: '',
};

const indexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case indexActionTypes.ADD_USER_START:
    case indexActionTypes.EDIT_USER_START:
    case indexActionTypes.DELETE_USER_START:
    case indexActionTypes.FETCH_USER_BY_ID_START:
    case indexActionTypes.FETCH_INDEX_START:
      return {
        ...state,
        isLoading: true,
      };
    case indexActionTypes.SET_INDEX_LIST:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case indexActionTypes.ADD_USER_FAIL:
    case indexActionTypes.EDIT_USER_FAIL:
    case indexActionTypes.DELETE_USER_FAIL:
    case indexActionTypes.FETCH_USER_BY_ID_FAIL:
    case indexActionTypes.FETCH_INDEX_FAIL:
      return {
        ...state,
        isLoading: false,
        //errorMessage: action.payload,
      };

    case indexActionTypes.ADD_NEW_USER:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };

    case indexActionTypes.FETCH_USER_BY_ID:
      return {
        ...state,
        currentItem: action.payload,
        isLoading: false,
      };
    case indexActionTypes.EDIT_USER:
      return {
        ...state,
        isLoading: false,
        list: state.list.map((item) => (item.id === action.payload.id ? action.payload : item)),
      };
    case indexActionTypes.DELETE_USER:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default indexReducer;
