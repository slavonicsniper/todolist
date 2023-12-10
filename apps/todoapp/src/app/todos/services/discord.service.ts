import { Injectable } from '@angular/core';
import { DiscordUser } from '../types/discordUser.interface';

@Injectable({
  providedIn: 'root',
})
export class DiscordService {
  async getUserAvatar(discordUser: DiscordUser): Promise<string> {
    return `https://cdn.discordapp.com/avatars/${discordUser.discordId}/${discordUser.avatar}.png`;
  }
}
