import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import OrmConfig from '../../mikro-orm.config';

import { Task, User } from '../../entities';
@Module({
  imports: [
    MikroOrmModule.forRoot(OrmConfig),
    MikroOrmModule.forFeature({
      entities: [User, Task],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
