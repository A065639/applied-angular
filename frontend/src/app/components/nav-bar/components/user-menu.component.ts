import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserDataService } from '../../../state/services/user-data.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [AsyncPipe],
  template: ` <div class="btn"></div> `,
  styles: ``,
})
export class UserMenuComponent {
  client = inject(UserDataService);

  user$ = this.client.getUser();
}
