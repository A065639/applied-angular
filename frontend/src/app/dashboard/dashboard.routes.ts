import { CanActivateFn, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MockupComponent } from './mockup/mockup.component';
import { provideEffects } from '@ngrx/effects';
import { DashboardNavigationEffect } from './state/effects/navigation.effect';
import { inject } from '@angular/core';
import { provideState, Store } from '@ngrx/store';
import { UserFeature } from '../state/user/user-feature';
import { UserSoftwareFeature } from './state/reducers/user-software.feature';

// Allows dashboard to be separate and isolated
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    canActivateChild: [userIsLoadedGuard()],

    providers: [
      provideState(UserSoftwareFeature),
      provideEffects(DashboardNavigationEffect),
    ],
    component: DashboardComponent,
    children: [
      {
        path: 'mock',
        component: MockupComponent,
      },
    ],
  },
];

function userIsLoadedGuard(): CanActivateFn {
  return () => {
    const store = inject(Store);
    const loaded = store.selectSignal(UserFeature.selectUserLoaded);
    return loaded();
  };
}
