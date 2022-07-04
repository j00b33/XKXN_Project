import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TattooGenre } from './entities/tattooGenre.entity';

@Injectable()
export class TattooGenreService {
  constructor(
    @InjectRepository(TattooGenre)
    private readonly tattooGenreRepository: Repository<TattooGenre>,
  ) {}

  async create({ genre }) {
    const result = await this.tattooGenreRepository.save({ genre });
    console.log('🖐', result);
    return result;
  }
}
