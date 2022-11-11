import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('login')
  login() {
    return;
  }

  @Get('redirect')
  redirect(@Res() res: Response) {
    res.send(200);
  }
}
