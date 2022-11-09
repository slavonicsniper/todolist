import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrmModule } from './modules/orm/orm.module';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [OrmModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
