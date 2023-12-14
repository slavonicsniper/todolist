import { Component } from '@angular/core';
import { DiscordUser } from '../../types/discordUser.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  user!: DiscordUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
