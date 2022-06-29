import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthAccessGuard extends AuthGuard('access') {
  getRequest(context: ExecutionContext) {
    // 검증하는 함수 ==> 함수를 바꿔치기해주는거임 AuthGuard('access)를 get Request로 바꿔주는거임 (graphql이 한단계 더 막아줌)
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

export class GqlAuthRefreshGuard extends AuthGuard('refresh') {
  getRequest(context: ExecutionContext) {
    // 검증하는 함수 ==> 함수를 바꿔치기해주는거임 AuthGuard('access)를 get Request로 바꿔주는거임 (graphql이 한단계 더 막아줌)
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

// 일단 accessToken을 넘겨야 여기까지 들어올 수 있음
