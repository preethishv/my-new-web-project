import { Component, OnInit } from '@angular/core';

import { Todos } from '../../todos.model';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css']
})
export class TodosCreateComponent implements OnInit {
  newTask: Todos = {title: 'title', description: 'description', duration: 0};
  constructor(public todosService: TodosService) { }

  ngOnInit() {
  }

  createTodos() {
    this.todosService.addTodos(this.newTask);
    this.newTask = {title: 'title', description: 'description', duration: 0};
  }

}
