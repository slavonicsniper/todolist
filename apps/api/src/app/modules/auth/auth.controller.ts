import { Controller, Res, Get, UseGuards, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard, DiscordAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:4200');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  @Get('logout')
  @UseGuards(AuthenticatedGuard)
  async logout(@Req() req: Request, @Res() res: Response) {
    // Clear the login session
    req.logout((err) => {
      if (err) {
        console.error('Error during logout:', err);
        return res.status(500).json({ message: 'Logout error' });
      }

      // Destroy the session in Redis
      req.session.destroy((destroyErr) => {
        if (destroyErr) {
          console.error('Error destroying session:', destroyErr);
          return res.status(500).json({ message: 'Logout error' });
        }

        // Send a response indicating successful logout
        res.status(200).json({ message: 'Logout successful' });
      });
    });
  }
}
