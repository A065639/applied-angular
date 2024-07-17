import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { WelcomeComponent } from './components/welcome.component';

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
];
