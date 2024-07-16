import { createFeature, createReducer } from '@ngrx/store';
import { User } from './models';

const initialState: User = {
  sub: 'Dummy User',
};

export const UserFeature = createFeature({
  name: 'User Feature',
  reducer: createReducer(initialState),
});
