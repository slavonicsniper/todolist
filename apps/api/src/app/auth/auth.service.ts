import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationProvider } from './auth';
import { UserService } from '../modules/user/user.service';
import { UserDetails } from '../utils/types';

@Injectable()
export class AuthService implements AuthenticationProvider {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService
  ) {}
  async validateUser(userDetails: UserDetails) {
    const { discordId } = userDetails;
    const user = await this.userService.findByDiscordId(discordId);
    return user ? user : this.userService.create(userDetails);
  }
}
