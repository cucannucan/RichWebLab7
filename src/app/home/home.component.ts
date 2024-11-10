import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule],  // Import FormsModule for ngModel
})
export class HomeComponent {
  homeTodos = [
    { id: 1, task: 'Learn Angular', isCompleted: false, time: '' },
    { id: 2, task: 'Write Code', isCompleted: true, time: '' },
    { id: 3, task: 'Test Angular Features', isCompleted: false, time: '2024-11-10T14:30' },
  ];

  newTask: string = ''; // Property to hold the new task input
  newTaskTime: string = ''; // Property to hold the time input for the task
  searchTerm: string = ''; // Property to hold the search term

  constructor(private router: Router) {}

  // Method to navigate to the Edit Task page
  editTask(id: number) {
    this.router.navigate(['/todo', id]);  // Navigate to TodoComponent with the task ID
  }

  // Method to delete a task
  deleteTask(id: number) {
    this.homeTodos = this.homeTodos.filter(todo => todo.id !== id);
  }

  // Method to add a new task
  addNewTask() {
    if (this.newTask.trim() !== '') {  // Ensure the task is not empty
      const newId = this.homeTodos.length > 0 ? Math.max(...this.homeTodos.map(todo => todo.id)) + 1 : 1;
      const newTask = { id: newId, task: this.newTask, isCompleted: false, time: this.newTaskTime };
      this.homeTodos.push(newTask);  // Add the new task to the list
      this.newTask = '';  // Clear the input field for task
      this.newTaskTime = '';  // Clear the input field for time
    }
  }

  // Method to filter tasks based on the search term
  get filteredTodos() {
    return this.homeTodos.filter(todo => 
      todo.task.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      (todo.time && todo.time.includes(this.searchTerm))
    );
  }
}
