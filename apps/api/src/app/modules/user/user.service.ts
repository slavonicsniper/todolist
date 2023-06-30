import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { User } from '../../entities/User';
import { UserDetails } from '../../utils/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>
  ) {}

  async findAll() {
    return await this.userRepository.findAll({
      populate: [],
      orderBy: { username: QueryOrder.DESC },
      limit: 20,
    });
  }

  async findByUuid(uuid: string) {
    return await this.userRepository.findOneOrFail(uuid, {
      populate: [],
    });
  }

  async findByDiscordId(discordId: string) {
    return await this.userRepository.findOneOrFail(discordId, {
      populate: [],
    });
  }

  async create(userDetails: UserDetails) {
    const user = this.userRepository.create(userDetails);
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
