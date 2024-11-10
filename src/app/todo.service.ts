import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, task: 'Learn Angular', isCompleted: false },
    { id: 2, task: 'Write Code', isCompleted: true }
  ];

  getTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  updateTodoTask(id: number, updatedTask: string): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.task = updatedTask;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
