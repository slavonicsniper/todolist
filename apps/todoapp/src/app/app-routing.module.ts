import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/components/todos/todos.component';
import { LoginComponent } from './todos/components/login/login.component';
import { AuthGuard } from './todos/guards/auth.guards';

const routes: Routes = [
  { path: '', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
