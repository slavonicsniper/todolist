import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { User, Task } from './entities';
import 'dotenv/config';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [User, Task],
  dbName: 'todolist',
  user: 'root',
  password: process.env.DB_PASS,
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  debug: true,
  logger: logger.log.bind(logger),
};

export default config;
