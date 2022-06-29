import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      // refreshToken이라는 변수에 저장할거임
      // 이렇게 만든 refreshToken을 setHeader (두번째 값으로) 보냄
      { email: user.email, sub: user.id },
      { secret: 'myRefreshKey', expiresIn: '2w' },
    );
    // 개발환경
    console.log('🐙 RefreshToken: ', refreshToken);
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  getAccessToken({ user }) {
    // sub안하고 id해도 됨
    return this.jwtService.sign(
      { email: user.email, id: user.id },
      { secret: 'myAccessKey', expiresIn: '1h' },
    );
  }

  async socialLogin({ req, res }) {
    // 1. 가입 확인
    let user = await this.userService.findOne({ email: req.user.email });

    // 2. 만약에 유저가 없다면 회원가입
    if (!user) {
      user = await this.userService.create({
        createUserInput: req.user,
      });
    }

    // 3. 회원가입이 이미 된 사람이 로그인을 했다면 로그인 진행
    this.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/main-project/frontend/login/index.html',
    );
  }
  logout({ context }) {
    return 'Successfully Logged out';
  }
}
