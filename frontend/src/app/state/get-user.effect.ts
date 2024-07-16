import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserDataService } from './services/user-data.service';
import { inject } from '@angular/core';
import { UserActions } from './actions';
import { map, switchMap } from 'rxjs';

// When you tell me to load the user, go to the API, when complete return user

export const loadUser = createEffect(
  (actions$ = inject(Actions), service = inject(UserDataService)) => {
    return actions$.pipe(
      ofType(UserActions.getUser),
      switchMap(() =>
        service
          .getUser()
          .pipe(map((user) => UserActions.userLoaded({ payload: user })))
      )
    );
  },
  { functional: true }
);
