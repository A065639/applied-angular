import { Component, input } from '@angular/core';
import { NavItem } from '../models';
import { LinkItemComponent } from './link-item.component';

@Component({
  selector: 'app-link-item-children',
  standalone: true,
  imports: [LinkItemComponent],
  template: `
    <li>
      <details>
        <summary>{{ link().label }}</summary>

        @if(link().children){
        <ul class="p-2">
          @for(childlink of link().children; track $index) {

          <!-- TODO: Do we need to support lower level nested children? -->
          <!-- TODO: Will require changes to the model to be all NavbarLinks based to know about children -->
          <app-link-item [link]="childlink" />
          }
        </ul>
        }
      </details>
    </li>
  `,
  styles: ``,
})
export class LinkItemChildrenComponent {
  link = input.required<NavItem>();
}
