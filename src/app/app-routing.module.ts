import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';

const routes: Routes = [
  {
    path: 'todos', component: TodoListComponent,
    children: [
      {
        path: 'create-edit-todo', component: AddEditTodoComponent, data: { title: 'Heroes List' }
      },
      {
        path: 'display-details', component: TodoDetailsComponent
      }
    ]
  },
  { path: '',   redirectTo: '/todos', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: EmptyPageComponent } // Wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
