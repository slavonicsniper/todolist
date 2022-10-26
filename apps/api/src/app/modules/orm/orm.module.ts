import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Logger } from '@nestjs/common';

import { User} from '../../entities';
const logger = new Logger('MikroORM');
@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [ User ],
      dbName: 'todolist',
      type: 'mysql',
      port: 3306,
      debug: true,
      logger: logger.log.bind(logger),
    }),
    MikroOrmModule.forFeature({
      entities: [User],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }