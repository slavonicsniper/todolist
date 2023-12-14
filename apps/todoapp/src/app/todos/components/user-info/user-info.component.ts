import { Component, Input, OnChanges } from '@angular/core';
import { DiscordUser } from '../../types/discordUser.interface';
import { DiscordService } from '../../services/discord.service';

@Component({
  selector: 'todolist-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnChanges {
  @Input('user') user!: DiscordUser;
  userAvatar!: string;

  constructor(private discordService: DiscordService) {}

  ngOnChanges() {
    if (this.user) {
      this.discordService.getUserAvatar(this.user).then((avatar) => {
        this.userAvatar = avatar;
      });
    }
  }
}
