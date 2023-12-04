import { InjectRepository } from '@mikro-orm/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { Message } from '@todolist/api-interfaces';
import { User } from './entities/User';
import { UserService } from './modules/user/user.service';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
