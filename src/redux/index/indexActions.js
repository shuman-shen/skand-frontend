export const setIndexList = (list) => ({
  type: 'SET_INDEX_LIST',
  payload: list,
});

export const addNewUser = (newUser) => ({
  type: 'ADD_NEW_USER',
  payload: newUser,
});

export const editUser = (user) => ({
  type: 'EDIT_USER',
  payload: user,
});
export const deleteUser = (user) => ({
  type: 'DELETE_USER',
  payload: user,
});
