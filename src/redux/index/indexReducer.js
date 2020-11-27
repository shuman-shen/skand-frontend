const INITIAL_STATE = {
  list: [],
};

const indexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_INDEX_LIST':
      return {
        ...state,
        list: action.payload,
      };
    case 'ADD_NEW_USER':
      return {
        ...state,
        list: [...state.list, { ...action.payload, id: '10000' }],
      };

    case 'EDIT_USER':
      return {
        ...state,
        list: state.list.map((item) => (item.id === action.payload.id ? action.payload : item)),
      };
    case 'DELETE_USER':
      return {
        ...state,
        list: state.list.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default indexReducer;
