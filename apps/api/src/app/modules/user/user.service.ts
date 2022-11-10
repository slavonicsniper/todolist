import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { User } from '../../entities/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>
  ) {}

  async findAll() {
    return await this.userRepository.findAll({
      populate: [],
      orderBy: { name: QueryOrder.DESC },
      limit: 20,
    });
  }

  async findByUuid(uuid: string) {
    return await this.userRepository.findOneOrFail(uuid, {
      populate: [],
    });
  }

  async create(body: any) {
    if (!body.name || !body.email) {
      throw new HttpException(
        'One of `name, email` is missing',
        HttpStatus.BAD_REQUEST
      );
    }

    const user = this.userRepository.create(body);
    await this.userRepository.persist(user).flush();

    return user;
  }

  async update(uuid: string, body: any) {
    const user = await this.userRepository.findOneOrFail(uuid);
    wrap(user).assign(body);
    await this.userRepository.persist(user).flush();

    return user;
  }

  async delete(uuid: string) {
    const user = await this.userRepository.findOneOrFail(uuid);
    try {
      await this.userRepository.removeAndFlush(user);
      return true;
    } catch (err) {
      return err;
    }
  }
}
