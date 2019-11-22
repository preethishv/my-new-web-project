import { Injectable } from '@angular/core';
import { Todos } from './todos.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
   private todosList: Todos[];
   // dummy data
  // = [{title: 'water plants', description: 'water plants at home', duration: 10},
  // {title: 'water plants', description: 'water plants at home', duration: 10},
  // {title: 'water plants', description: 'water plants at home', duration: 10}];

  private todosListUpdated = new Subject<{ todosList: Todos[], searchTodos: string; }>();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getTodos() {
    return this.httpClient
    .get<{todos: any}>('http://localhost:3000/api/todos')
    .pipe(map((todos: any) => {
      return todos.map(todo => {
        return {
          title: todo.title,
          description: todo.description,
          duration: todo.duration
        };
      });
    }))
    .subscribe((transformedTodos) => {
      this.todosList = transformedTodos;
      this.todosListUpdated.next({
        todosList : [...this.todosList],
        searchTodos: ''});

    });
  }

  addTodos(todoItem: Todos) {
    this.todosList.push(todoItem);
    this.todosListUpdated.next({
      todosList : [...this.todosList],
      searchTodos: ''});
    this.httpClient.post<{message: string}>('http://localhost:3000/api/todos', todoItem)
    .subscribe((responseData) => {
       console.log(responseData);
       this.router.navigate(['/']);
    });
  }

  searchTodos(searchTodos: string) {
    this.todosListUpdated.next({
      todosList : [...this.todosList],
      searchTodos
    });
  }

  getTodosListener() {
    return this.todosListUpdated.asObservable();
  }
}
