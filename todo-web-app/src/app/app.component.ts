import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoApiService } from './services/todo-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { Todo } from './models/todo.model';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, TodoItemComponent, NzListModule, NzGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  service = inject(TodoApiService);
  todos: WritableSignal<Todo[]> = signal([]);
  

  ngOnInit(): void {
    this.service.getTodos().subscribe(item => this.todos.set(item));
  }
}
