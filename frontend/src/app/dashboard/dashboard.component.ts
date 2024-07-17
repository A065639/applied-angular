import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <h1>Dashboard</h1>
    <a routerLink="mock">See the mock</a>

    <div class="divider">MOCK INFORMATION</div>

    <router-outlet />
  `,
  styles: ``,
})
export class DashboardComponent {}
