import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/components/todos/todos.component';
import { LoginComponent } from './todos/components/login/login.component';
import { StatusComponent } from './todos/components/status/status.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'status', component: StatusComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
