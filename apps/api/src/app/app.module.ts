import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { OrmModule } from './modules/orm/orm.module';
import { TaskController } from './modules/task/task.controller';
import { TaskService } from './modules/task/task.service';
import { UserService } from './modules/user/user.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [OrmModule, AuthModule, UserModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
