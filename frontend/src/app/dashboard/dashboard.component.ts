import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BeginComponent } from './create-issues/steps/begin.component';
import { Store } from '@ngrx/store';
import { SoftwareListActions } from './state/actions/list.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BeginComponent],
  template: `
    <h1>Dashboard</h1>
    <a routerLink="mock">See the mock</a>
    <a routerLink="create-issue">Create Issue</a>
    <!-- <app-begin /> -->

    <div class="divider">MOCK INFORMATION</div>
    <router-outlet />
  `,
  styles: ``,
})
export class DashboardComponent {
  constructor(store: Store) {
    store.dispatch(SoftwareListActions.loadTheEntitledSoftware());
  }
}
