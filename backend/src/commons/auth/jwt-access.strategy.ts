import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  // 여기 작성한대로 userResolver의 fetchUser 검증하겠다

  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    super({
      // 검증부 (먼저 실행되고 검증에 성공하면)
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myAccessKey',
      passReqToCallback: true,
    });
  }

  // 검증 완료되면 실행  (검증 성공)
  async validate(req, payload) {
    // redis로 accessToken 여부 확인
    // if (accessToken이 있다면 요청 거부)
    // else if (!accessToken) 요청 승인
    const accessToken = req.headers.authorization.split(' ')[1];

    const checkRedis = await this.cacheManager.get(accessToken);

    if (checkRedis == 'accessToken') {
      throw new UnauthorizedException();
    }

    console.log('🤡', accessToken);

    console.log(payload);
    return {
      email: payload.email,
      id: payload.sub,
      exp: payload.exp,
    };
  }
}
