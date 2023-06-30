import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationProvider } from './auth';
import { UserService } from '../modules/user/user.service';
import { UserDetails } from '../utils/types';

@Injectable()
export class AuthService implements AuthenticationProvider {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService
  ) {}
  validateUser(userDetails: UserDetails) {
    const { discordId } = userDetails;
    const user = this.userService.findByDiscordId(discordId);
    return user ? user : this.userService.create(userDetails);
  }
  createUser() {
    throw new Error('Method not implemented.');
  }
  findUser() {
    throw new Error('Method not implemented.');
  }
}
