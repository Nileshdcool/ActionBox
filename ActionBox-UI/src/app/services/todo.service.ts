import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(text: string): void {
    this.todos.push({ id: this.nextId++, text, completed: false });
  }

  updateTodo(id: number, text: string): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.text = text;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  toggleComplete(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}