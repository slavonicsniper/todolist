import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param() uuid: string) {
    return this.userService.findByUuid(uuid);
  }

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  @Put(':uuid')
  update(@Param() uuid: string, @Body() body: any) {
    return this.userService.update(uuid, body);
  }

  @Delete(':uuid')
  delete(@Param() uuid: string) {
    return this.userService.delete(uuid);
  }
}
