/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import session from 'express-session';
import passport from 'passport';
import { AppModule } from './app/app.module';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });
  const globalPrefix = 'api';
  const client = createClient({ url: process.env.REDIS_URI });
  client.on('connect', () => console.log('connected to redis'));
  client.connect().catch(console.error);
  app.use(
    session({
      cookie: {
        maxAge: 86400000,
      },
      secret: 'very$ecure$ecret',
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({ client }),
    })
  );
  app.setGlobalPrefix(globalPrefix);
  app.use(passport.initialize());
  app.use(passport.session());
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
