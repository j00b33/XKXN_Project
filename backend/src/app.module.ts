import { Module } from '@nestjs/common';
import { TattooModule } from './apis/tattoo/tattoo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TattooModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // 상관이 없지만 타입을 지정해주는 이유는 어룰 ㅡㄱㅅ
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', // => typeDef 얘네가 자동으로 만들어줘서 우리가 굳이 안만들어도 됨
    }),
  ],
})
export class AppModule {}
