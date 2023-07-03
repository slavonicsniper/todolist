import { Module } from '@nestjs/common';
import { DiscordStrategy } from './strategies/discord.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../modules/user/user.service';
import { OrmModule } from '../modules/orm/orm.module';
import { SessionSerializer } from './utils/Serializer';

@Module({
  imports: [OrmModule],
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
})
export class AuthModule {}
