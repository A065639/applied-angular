import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { UserActions } from './actions';
import { User } from '../models';

const initialState: User = {
  sub: '',
};

export const UserFeature = createFeature({
  name: 'User Feature',
  reducer: createReducer(
    initialState,
    on(UserActions.userLoaded, (_, action) => action.payload)
  ),
  extraSelectors: ({ selectSub }) => ({
    selectUserLoaded: () => createSelector(selectSub, (s) => s !== ''),
  }),
});
