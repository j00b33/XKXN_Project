import {
  UnauthorizedException,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import {
  GqlAuthAccessGuard,
  GqlAuthRefreshGuard,
} from 'src/commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';

import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Mutation(() => String)
  async userLogin(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: any,
  ) {
    console.log('🎐', context.req.headers.cookie);
    // 1. 로그인 (DB에서 이메일과 비밀번호가 일치하는 유저 찾기)
    const user = await this.userService.findOne({ email });

    // 2. 일치하는 유저가 없으면 ==> 에러 던지기
    if (!user) {
      throw new UnprocessableEntityException('The mail already exists'); // 422 error -> 로직상에 문제가 있을때
    }

    // 3. 일치하는 유저가 있지만 암호가 틀렸다면 ==> 에러 던지기
    const isAuth = await bcrypt.compare(password, user.password); // 순서 중요함
    if (!isAuth) {
      throw new UnprocessableEntityException('Incorrect Password');
    }

    // 4. refreshToken (=JWT) 만들어서 프론트엔드(쿠키)에 보내주기
    this.authService.setRefreshToken({ user, res: context.res });
    // console.log('🌸 ', context);

    //5. 일치하는 유저가 있으면 ==> accessToken (JWT) 토큰 만들어서 프론트앤드에 주기
    return this.authService.getAccessToken({ user });
  }

  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  restoreAccessToken(@CurrentUser() currentUser: ICurrentUser) {
    return this.authService.getAccessToken({ user: currentUser });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async logout(@Context() context: any) {
    // put accessToken to redis
    const accessToken = context.req.headers.authorization.split(' ')[1];
    const refreshToken = context.req.headers.cookie.replace(
      'refreshToken=',
      '',
    );

    const ttlForAccess = accessToken.exp - accessToken.iat;
    const ttlForRefresh = refreshToken.exp - refreshToken.iat;

    try {
      const checkAccessToken = jwt.verify(accessToken, 'myAccessKey');
      const checkRefreshToken = jwt.verify(refreshToken, 'myRefreshKey');

      console.log('🌕', checkAccessToken);
      console.log('🥹', checkRefreshToken);
      await this.cacheManager.set(accessToken, 'accessToken', {
        ttl: ttlForAccess,
      });

      await this.cacheManager.set(refreshToken, 'refreshToken', {
        ttl: ttlForRefresh,
      });
    } catch (error) {
      throw new UnauthorizedException('Failed to verify token');
    }

    return this.authService.logout({ context });
  }
}
