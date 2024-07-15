import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <div>
      <h2>Student Stuff</h2>
      <ul>
        <li><a routerLink="signals">Signals</a></li>
      </ul>
    </div>
    <div>
      <router-outlet />
    </div>`,
  styles: ``,
})
export class StudentsComponent {}
