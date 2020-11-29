import { createSelector } from 'reselect';

const selectIndex = (state) => state.index;

export const selectIndexList = createSelector([selectIndex], (index) => index.list);

export const selectIsLoading = createSelector([selectIndex], (index) => index.isLoading);

export const selectCurrentItem = createSelector([selectIndex], (index) => index.currentItem);

// get user by id
export const selectIndexItem = (id) =>
  createSelector([selectIndexList], (list) => {
    const result = list.find((item) => item.id === id);
    if (result) {
      for (const [key, value] of Object.entries(result)) {
        if (value === null) result[key] = '';
      }
    }
    return result;
  });
