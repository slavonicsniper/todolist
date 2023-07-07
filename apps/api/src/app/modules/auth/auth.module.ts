import { Module } from '@nestjs/common';
import { DiscordStrategy } from './strategies/discord.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { SessionSerializer } from './utils/Serializer';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../../entities';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
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
