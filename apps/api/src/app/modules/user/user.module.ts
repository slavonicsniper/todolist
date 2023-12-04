import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { OrmModule } from '../orm/orm.module';
import { UserService } from './user.service';
import { TaskService } from '../task/task.service';

@Module({
  imports: [OrmModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModule],
})
export class UserModule {}
