import { Component, Input } from '@angular/core';
import { DiscordUser } from '../../types/discordUser.interface';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input('user') user!: DiscordUser;
}
