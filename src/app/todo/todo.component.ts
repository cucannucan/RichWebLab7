import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TodoComponent implements OnInit {
  todo: Todo | undefined;
  updatedTask: string = ''; // Property to bind to the text box

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;  // Retrieve the 'id' from the route parameter
    this.todo = this.todoService.getTodoById(id);  // Fetch the task using the 'id'

    if (this.todo) {
      this.updatedTask = this.todo.task;  // Initialize the updated task
    } else {
      console.log('Task not found');
    }
  }

  saveTask() {
    if (this.todo) {
      this.todoService.updateTodoTask(this.todo.id, this.updatedTask);
      this.router.navigate(['/']);  // Redirect back to home
    }
  }

  deleteTodo() {
    if (this.todo) {
      this.todoService.deleteTodo(this.todo.id);
      this.router.navigate(['/']);  // Redirect back to home
    }
  }
}
