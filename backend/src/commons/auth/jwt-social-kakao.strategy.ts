import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: '451234ce3f7931a1f2488cfedd091379',
      callbackURL: 'http://localhost:3000/login/kakao',
    });
  }

  async validate(
    accessToken: string, //
    refreshToken: string,
    profile: any,
  ) {
    console.log('🌼', accessToken);
    console.log('🤢 ', refreshToken);
    console.log('🌿 ', profile);

    return {
      email: profile._json.kakao_account.email,
      password: 'password',
      name: profile.username,
      age: parseInt(profile._json.kakao_account.age_range),
      phoneNumber: '01012345678',
      isTattooist: false,
      userDetail: '안냐세용',
    };
  }
}
