import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DiscordUser } from '../../types/discordUser.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  user!: DiscordUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.authService.checkAuthStatus();
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
