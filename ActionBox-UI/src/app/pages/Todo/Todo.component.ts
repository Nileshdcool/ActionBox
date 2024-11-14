import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-Todo',
  templateUrl: './Todo.component.html',
  styleUrls: ['./Todo.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,]
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo: string = '';
  editingTodo: Todo | null = null;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
      this.todos = this.todoService.getTodos();
    }
  }

  editTodo(todo: Todo) {
    const newText = prompt('Edit Todo', todo.text);
    if (newText !== null) {
      this.todoService.updateTodo(todo.id, newText);
      this.todos = this.todoService.getTodos();
    }
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
    this.todos = this.todoService.getTodos();
  }

  toggleComplete(todo: Todo) {
    this.todoService.toggleComplete(todo.id);
    this.todos = this.todoService.getTodos();
  }

}
