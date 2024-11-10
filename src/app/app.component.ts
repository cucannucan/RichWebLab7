import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/todos">To-Do List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        margin-bottom: 20px;
      }
      a {
        margin-right: 10px;
      }
    `,
  ],
})
export class AppComponent {}
