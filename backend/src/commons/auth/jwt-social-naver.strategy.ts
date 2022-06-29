import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-naver-v2';

@Injectable()
export class JwtNaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor() {
    super({
      clientID: '1aW9IyF4GRYuEQFygTsm',
      clientSecret: 'NU7EY9Qf8D',
      callbackURL: 'http://localhost:3000/login/naver',
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
      email: profile._json.response.email,
      password: 'password',
      name: profile.name,
      age: Number(profile._json.response.age),
      phoneNumber: '01012345678',
      isTattooist: false,
      userDetail: '안냐세용',
    };
  }
}
