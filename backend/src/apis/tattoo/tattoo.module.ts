import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TattooGenre } from '../tattooGenre/entities/tattooGenre.entity';
import { Tattoo } from './entities/tattoo.entity';
import { TattooResolver } from './tattoo.resolver';
import { TattooService } from './tattoo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tattoo, TattooGenre])],
  providers: [TattooResolver, TattooService],
})
export class TattooModule {}
