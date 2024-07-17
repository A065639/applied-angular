import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BeginComponent } from './create-issues/steps/begin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BeginComponent],
  template: `
    <h1>Dashboard</h1>
    <a routerLink="mock">See the mock</a>
    <app-begin />

    <div class="divider">MOCK INFORMATION</div>

    <router-outlet />
  `,
  styles: ``,
})
export class DashboardComponent {}
