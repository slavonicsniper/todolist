import { Injectable } from '@angular/core';
import { DiscordUser } from '../types/discordUser.interface';

@Injectable({
  providedIn: 'root',
})
export class DiscordService {
  async getUserAvatar(discordUser: DiscordUser): Promise<string> {
    return `https://cdn.discordapp.com/avatars/${discordUser.discordId}/${discordUser.avatar}.png`;
  }

  async getDefaultAvatar(discordUser: DiscordUser): Promise<string> {
    let png = parseInt(discordUser.discriminator) % 5;
    return `https://cdn.discordapp.com/embed/avatars/${png}.png`;
  }
}
