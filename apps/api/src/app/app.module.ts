import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';

import { PassportModule } from '@nestjs/passport';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import OrmConfig from './mikro-orm.config';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(OrmConfig),
    AuthModule,
    UserModule,
    TaskModule,
    PassportModule.register({ session: true }),
  ],
})
export class AppModule {}
