import { NgModule } from '@angular/core';
import { TodosComponent } from '../components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { TodosService } from '../services/todos.service';
import { MainComponent } from '../components/main/main.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../components/todo/todo.component';
import { FooterComponent } from '../components/footer/footer.component';
import { UserInfoComponent } from '../components/user-info/user-info.component';
import { DiscordService } from '../services/discord.service';
import { LogoutComponent } from '../components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent,
    UserInfoComponent,
    MainComponent,
    TodoComponent,
    FooterComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService, DiscordService],
})
export class MainModule {}
