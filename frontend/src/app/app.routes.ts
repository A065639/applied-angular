import { CanActivateFn, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { WelcomeComponent } from './components/welcome.component';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { UserFeature } from './state/user/user-feature';

export const routes: Routes = [
  {
    path: 'home',
    component: WelcomeComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'signals',
        loadComponent: () =>
          // Lazy loading and downloading of the component, will be downloaded when/if used
          import('./students/signals/signals.component').then(
            (c) => c.SignalsComponent
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    // You cannot go here until we have a user loaded
    canActivate: [userIsLoadedGuard()],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((r) => r.DASHBOARD_ROUTES),
  },
];

function userIsLoadedGuard(): CanActivateFn {
  return () => {
    const store = inject(Store);
    const loaded = store.selectSignal(UserFeature.selectUserLoaded);
    return loaded();
  };
}
