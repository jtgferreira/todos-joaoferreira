import { Injectable, inject } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly getTodosUrl = `${this.serverUrl}/todos`;

  httpClient = inject(HttpClient);

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.getTodosUrl);
  }
}
