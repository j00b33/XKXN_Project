import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { FileModule } from './apis/file/file.module';
import { ImageModule } from './apis/image/image.module';
import { ReceiptModule } from './apis/receipt/receipt.module';
import { TattooModule } from './apis/tattoo/tattoo.module';
import { TattooBodypartModule } from './apis/tattooBodypart/tattooBodypart.module';
import { TattooGenreModule } from './apis/tattooGenere/tattooGenre.module';
import { TattooistReviewModule } from './apis/tattooistReview/tattooistReview.module';
import { TattooRegionModule } from './apis/tattooRegion/tattooRegion.module';
import { UserModule } from './apis/users/user.module';

import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { SearchModule } from './apis/search/search.module';

@Module({
  imports: [
    TattooModule,
    TattooGenreModule,
    TattooRegionModule,
    TattooBodypartModule,
    FileModule,
    UserModule,
    TattooistReviewModule,
    AuthModule,
    ReceiptModule,
    ImageModule,
    SearchModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', // => typeDef 얘네가 자동으로 만들어줘서 우리가 굳이 안만들어도 됨
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mainproject',
      entities: [__dirname + '/apis/**/*.entity.*'], // **: 모든 폴더에, *모든 파일의 엔티티를 끄집어내서 * 모두 import 하겠다
      synchronize: true,
      logging: true,
      retryAttempts: 30,
      retryDelay: 5000,
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://my-redis:6379',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
// API들을 import하는 역할
// 연결을 모아주는 핵심 부분
// DB설정까지 합쳐줄거임
