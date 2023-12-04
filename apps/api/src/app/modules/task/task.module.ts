import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { OrmModule } from '../orm/orm.module';
import { TaskService } from './task.service';

@Module({
  imports: [OrmModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
