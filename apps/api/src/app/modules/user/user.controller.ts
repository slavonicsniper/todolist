import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../../entities';

@Controller('user')
export class UserController {

  constructor(@InjectRepository(User) private readonly userRepository: EntityRepository<User>) { }

  @Get()
  async find() {
    return await this.userRepository.findAll({
      populate: [],
      orderBy: { name: QueryOrder.DESC },
      limit: 20,
    });
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    return await this.userRepository.findOneOrFail(+id, {
      populate: [],
    });
  }

  @Post()
  async create(@Body() body: any) {
    if (!body.name || !body.email) {
      throw new HttpException('One of `name, email` is missing', HttpStatus.BAD_REQUEST);
    }

    const user = this.userRepository.create(body);
    await this.userRepository.persist(user).flush();

    return user;
  }

  @Put(':id')
  async update(@Param() id: string, @Body() body: any) {
    const user = await this.userRepository.findOneOrFail(+id);
    wrap(user).assign(body);
    await this.userRepository.persist(user);

    return user;
  }

}