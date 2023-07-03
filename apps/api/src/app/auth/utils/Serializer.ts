import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from '../../modules/user/user.service';
import { User } from '../../entities';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    done(null, user);
  }

  deserializeUser(user: User, done: Function) {
    const userDB = this.userService.findByDiscordId(user.discordId);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
