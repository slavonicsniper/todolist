import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DiscordUser } from '../../types/discordUser.interface';
import { DiscordService } from '../../services/discord.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'todolist-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input('user') user!: DiscordUser;
  userAvatar!: string;

  constructor(
    private authService: AuthService,
    private discordService: DiscordService
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      this.discordService.getUserAvatar(this.user).then((avatar) => {
        this.userAvatar = avatar;
        if (avatar == null) {
          this.discordService.getDefaultAvatar(this.user).then((avatar) => {
            this.userAvatar = avatar;
          });
        }
      });
    });
  }
}
