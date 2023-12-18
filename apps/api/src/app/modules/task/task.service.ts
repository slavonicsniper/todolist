import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { Task } from '../../entities/Task';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>
  ) {}

  async findByUser(user) {
    return await this.taskRepository.find(
      { user: user.uuid },
      {
        populate: [],
        orderBy: { text: QueryOrder.DESC },
        limit: 20,
      }
    );
  }

  async findByUuid(uuid: string) {
    return await this.taskRepository.findOneOrFail(uuid, {
      populate: [],
    });
  }

  async toggleAll(updatedTodos: UpdateTaskDto[]) {
    updatedTodos.forEach((todo) => {
      this.taskRepository.nativeUpdate(
        { uuid: todo.uuid },
        { isCompleted: todo.isCompleted }
      );
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

  async update(uuid: string, body: UpdateTaskDto) {
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
