import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core'
import { User } from './entities';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [ User ],
  dbName: 'todolist',
  type: 'mysql',
  port: 3306,
  debug: true,
  logger: logger.log.bind(logger),
};

export default config;