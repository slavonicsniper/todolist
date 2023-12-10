import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DiscordUser } from '../../types/discordUser.interface';

@Component({
  selector: 'todolist-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user!: DiscordUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
