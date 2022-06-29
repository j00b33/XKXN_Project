import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../users/entities/users.entity';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name'>;
}

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login/google')
  @UseGuards(AuthGuard('google')) // restAPI라서 따로 할 필요가 없음
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    return this.authService.socialLogin({ req, res });
  }

  @Get('/login/naver')
  @UseGuards(AuthGuard('naver')) // restAPI라서 따로 할 필요가 없음
  async loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    return this.authService.socialLogin({ req, res });
  }

  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakao')) // restAPI라서 따로 할 필요가 없음
  async loginKakao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    return this.authService.socialLogin({ req, res });
  }
}
