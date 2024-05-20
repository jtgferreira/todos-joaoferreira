import { Injectable, inject } from '@angular/core';
import { CreateTodo, Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly todosUrl = `${this.serverUrl}/todos`;

  httpClient = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todosUrl);
  }

  postTodo(todo: CreateTodo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.todosUrl, { ...todo });
  }

  removeTodo(todoId: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${this.todosUrl}/${todoId}`);
  }
}
