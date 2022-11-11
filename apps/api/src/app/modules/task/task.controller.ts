import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param() uuid: string) {
    return this.taskService.findByUuid(uuid);
  }

  @Post()
  create(@Body() body: any) {
    return this.taskService.create(body);
  }

  @Put(':uuid')
  update(@Param() uuid: string, @Body() body: any) {
    return this.taskService.update(uuid, body);
  }

  @Delete(':uuid')
  delete(@Param() uuid: string) {
    return this.taskService.delete(uuid);
  }
}
