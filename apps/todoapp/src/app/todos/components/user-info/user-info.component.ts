import { Component, Input } from '@angular/core';
import { DiscordUser } from '../../types/discordUser.interface';

@Component({
  selector: 'todolist-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input('user') user!: DiscordUser;
}
