import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models';

export const UserActions = createActionGroup({
  source: 'User Actions',
  events: {
    'Get User': emptyProps(), // Causes the effect to run
    'User Loaded': props<{ payload: User }>(),
  },
});
