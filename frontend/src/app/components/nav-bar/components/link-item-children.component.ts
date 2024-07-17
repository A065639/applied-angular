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
          @if(childlink.children){
          <app-link-item-children [link]="childlink" />
          } @else {

          <app-link-item [link]="childlink" />
          } }
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
