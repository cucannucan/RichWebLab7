import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

// app.routes.ts

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Home page
  { path: 'todo/:id', component: TodoComponent },  // Edit page for a specific task
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import the router module with routes
  exports: [RouterModule]  // Export the router module to use in the app
})
export class AppRoutingModule { }
