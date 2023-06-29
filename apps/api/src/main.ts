/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.use(
    session({
      cookie: {
        maxAge: 86400000,
      },
      secret: 'very$ecure$ecret',
      resave: false,
      saveUnititiliazed: false,
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
