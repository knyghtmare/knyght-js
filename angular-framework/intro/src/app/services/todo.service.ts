import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL:string =  'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=9';

  constructor(private http: HttpClient) { }

  // get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  // delete todos
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // add todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }

  // toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
