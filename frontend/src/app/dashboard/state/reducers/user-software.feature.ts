/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { SoftwareListActions } from '../actions/list.actions';

export type SoftwareItem = {
  name: string;
  id: string;
};

export type UserSoftwareState = {
  list: SoftwareItem[];
  titleFilter: string | null;
};

const initialState: UserSoftwareState = {
  list: [
    {
      id: '1',
      name: 'Visual Studio Code',
    },
    {
      id: '2',
      name: 'Jetbrains Rider',
    },
    {
      id: '3',
      name: 'Destiny',
    },
  ],
  titleFilter: null,
};

export const UserSoftwareFeature = createFeature({
  name: 'User Software',
  reducer: createReducer(
    initialState,
    on(SoftwareListActions.listFilteredBy, (beforeState, action) => ({
      list: beforeState.list,
      titleFilter: action.payload,
    }))
  ),
  extraSelectors: ({ selectList, selectTitleFilter }) => ({
    selectFilteredList: createSelector(
      selectList,
      selectTitleFilter,
      (list, filter) => {
        if (filter === null) {
          return list;
        }
        return list.filter((i) => i.name.includes(filter));
      }
    ),
  }),
});
