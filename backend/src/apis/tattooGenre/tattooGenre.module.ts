import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TattooGenre } from './entities/tattooGenre.entity';
import { TattooGenreResolver } from './tattooGenre.resolver';
import { TattooGenreService } from './tattooGenre.service';

@Module({
  imports: [TypeOrmModule.forFeature([TattooGenre])],
  providers: [TattooGenreService, TattooGenreResolver],
})
export class TattooGenreModule {}
