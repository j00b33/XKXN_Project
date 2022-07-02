import { Module } from '@nestjs/common';
import { TattooModule } from './apis/tattoo/tattoo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TattooModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', // => typeDef 얘네가 자동으로 만들어줘서 우리가 굳이 안만들어도 됨
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'alsldjswm',
      database: 'xkxn',
      entities: [__dirname + '/apis/**/*.entity.*'], // **: 모든 폴더에, *모든 파일의 엔티티를 끄집어내서 * 모두 import 하겠다
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
