import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Task } from '../../entities';
import { TaskService } from './task.service';

@Module({
  imports: [MikroOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
