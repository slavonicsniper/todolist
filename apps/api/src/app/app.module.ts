import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { OrmModule } from './modules/orm/orm.module';
import { TaskController } from './modules/task/task.controller';
import { TaskService } from './modules/task/task.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [OrmModule, AuthModule],
  controllers: [AppController, UserController, TaskController],
  providers: [AppService, UserService, TaskService],
})
export class AppModule {}
