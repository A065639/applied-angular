import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { SignalsComponent } from './students/signals.component';
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
        component: SignalsComponent,
      },
    ],
  },
];
