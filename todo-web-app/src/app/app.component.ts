import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoApiService } from './services/todo-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CreateTodo, Todo } from './models/todo.model';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CreateTodoFormComponent } from './components/create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule, 
    
    CreateTodoFormComponent,
    TodoItemComponent,
    
    NzListModule,
    NzGridModule,
    NzButtonModule,
    NzModalModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isCreateModalVisible = false;

  service = inject(TodoApiService);
  todos: WritableSignal<Todo[]> = signal([]);
  

  ngOnInit(): void {
    this.service.getTodos().subscribe(item => this.todos.set(item));
  }

  createTodo(todo: CreateTodo): void {
    this.service.postTodo(todo).subscribe(item => this.todos.update(values => [item, ...values]));
    this.isCreateModalVisible = false;
  }

  removeTodo(todoId: number): void {
    this.service.removeTodo(todoId).subscribe(item => this.todos.update(values => values.filter(todo => todo.id != item.id)));
  }
}
