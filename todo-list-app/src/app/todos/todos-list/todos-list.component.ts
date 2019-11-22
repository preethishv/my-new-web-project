import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todos } from '../../todos.model';
import { TodosService } from '../../todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit, OnDestroy {
  tasks: Todos[];
  private todoSub: Subscription;
  constructor(public todosService: TodosService) { }

  ngOnInit() {
    this.todosService.getTodos();
    this.todoSub = this.todosService
    .getTodosListener()
    .subscribe((todosList: {todosList: Todos[], searchTodos: string}) => {
      if (!todosList.searchTodos) {
        this.tasks = todosList.todosList;
      } else {
        this.tasks = todosList.todosList.filter(todo => todo.title.toLowerCase().includes(todosList.searchTodos));
      }
    });
  }

  ngOnDestroy(): void {
    this.todoSub.unsubscribe();
  }
}
