import { Module } from '@nestjs/common';
import { DiscordStrategy } from './strategies/discord.strategy';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [DiscordStrategy],
})
export class AuthModule {}
