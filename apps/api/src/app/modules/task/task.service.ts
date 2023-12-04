import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { Task } from '../../entities/Task';
import { CreateTaskDto } from './create-task.dto';
import { User } from '../../entities/User';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>
  ) {}

  async findAll() {
    return await this.taskRepository.findAll({
      populate: [],
      orderBy: { text: QueryOrder.DESC },
      limit: 20,
    });
  }

  async findByUuid(uuid: string) {
    return await this.taskRepository.findOneOrFail(uuid, {
      populate: [],
    });
  }

  async create(user, body: CreateTaskDto) {
    const { text } = body;
    if (!body.text) {
      throw new HttpException('Text is missing', HttpStatus.BAD_REQUEST);
    }
    const task = this.taskRepository.create({ text, user: user.uuid });
    await this.taskRepository.persist(task).flush();

    return task;
  }

  async update(uuid: string, body: any) {
    const task = await this.taskRepository.findOneOrFail(uuid);
    wrap(task).assign(body);
    await this.taskRepository.persist(task).flush();

    return task;
  }

  async delete(uuid: string) {
    const task = await this.taskRepository.findOneOrFail(uuid);
    try {
      await this.taskRepository.removeAndFlush(task);
      return true;
    } catch (err) {
      return err;
    }
  }
}
