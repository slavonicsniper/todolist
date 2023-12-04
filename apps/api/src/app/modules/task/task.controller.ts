import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './create-task.dto';
import { AuthenticatedGuard } from '../auth/guards';
import { Request } from 'express';

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
  @UseGuards(AuthenticatedGuard)
  async create(@Req() req: Request, @Body() body: CreateTaskDto) {
    const user = await req.user;
    return this.taskService.create(user, body);
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
