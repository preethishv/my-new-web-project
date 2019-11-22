import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
  styleUrls: ['./todos-header.component.css']
})
export class TodosHeaderComponent implements OnInit {
  searchTodo: string;
  isSearchEnabled = true;
  constructor(public todosService: TodosService, private router: Router) { }

  ngOnInit() {
  }

  passTodoSearch() {
    this.todosService.searchTodos(this.searchTodo);
  }

}
