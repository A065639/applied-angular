import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../../state/user-feature';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="btn">
      @if(user() === ''){
      <span class="loading loading-infinity loading-md"></span>
      } @else {
      {{ user() }}
      }
    </div>
  `,
  styles: ``,
})
export class UserMenuComponent {
  // client = inject(UserDataService);
  // user$ = this.client.getUser();

  store = inject(Store);
  user = this.store.selectSignal(UserFeature.selectSub);
}
