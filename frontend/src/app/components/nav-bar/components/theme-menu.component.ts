import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme-menu',
  standalone: true,
  imports: [],
  template: `
    <label class="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <input
        id="theme"
        type="checkbox"
        value="dark"
        (change)="onChange()"
        class="toggle theme-controller"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  `,
  styles: ``,
})
export class ThemeMenuComponent implements OnInit {
  isDarkTheme = false;
  theme = 'light';

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('my-theme');
    console.log(storedTheme);

    this.isDarkTheme = storedTheme == 'dark' ? true : false;
    this.theme = this.isDarkTheme ? 'dark' : 'light';
  }

  onChange() {
    const element = document.getElementById('theme') as HTMLInputElement;

    localStorage.setItem('my-theme', element.checked ? 'dark' : 'light');
    const storedTheme = localStorage.getItem('my-theme');

    this.theme = storedTheme ? storedTheme : 'light';
  }
}
