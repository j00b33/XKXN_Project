import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  // 여기 작성한대로 userResolver의 fetchUser 검증하겠다

  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    super({
      jwtFromRequest: (req) => req.headers.cookie.replace('refreshToken=', ''),
      secretOrKey: 'myRefreshKey',
    });
  }

  // 검증 완료되면 실행  (검증 성공)
  async validate(req, payload) {
    const refreshToken = req.headers.authorization.split(' ')[1];

    const checkRedis = await this.cacheManager.get(refreshToken);

    if (checkRedis == 'refreshToken') {
      throw new UnauthorizedException();
    }

    console.log(payload);
    return {
      // 아래 내용이 context.req.user에 저장됨 // 그래서 currentUser를 뽑아서 쓸 수 있는거임
      email: payload.email,
      id: payload.sub,
    };
  }
}
