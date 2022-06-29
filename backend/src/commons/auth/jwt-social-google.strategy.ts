import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '26001754493-412brs1j91g73jtcvua5jd7p2j4kteq8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string, //
    refreshToken: string,
    profile: any,
  ) {
    console.log('🌼', accessToken);
    console.log('🤢 ', refreshToken);
    console.log(profile);

    return {
      email: profile.emails[0].value,
      password: 'password',
      name: profile.displayName,
      age: 0,
      phoneNumber: '01000000000',
      isTattooist: false,
      userDetail: '안냐세용',
    };
  }
}
