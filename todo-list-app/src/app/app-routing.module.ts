import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosCreateComponent } from './todos/todos-create/todos-create.component';


const routes: Routes = [
  {path: '', component: TodosListComponent},
  {path: 'create-todo', component: TodosCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
