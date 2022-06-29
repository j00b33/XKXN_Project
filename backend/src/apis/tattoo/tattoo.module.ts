import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TattooGenre } from '../tattooGenere/entities/tattooGenere.entity';
import { User } from '../users/entities/users.entity';
import { Tattoo } from './entities/tattoo.entity';
import { TattooResolver } from './tattoo.resolver';
import { TattooService } from './tattoo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tattoo, TattooGenre, User]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [TattooResolver, TattooService],
})
export class TattooModule {}
