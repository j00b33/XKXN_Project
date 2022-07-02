import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tattoo } from './entities/tattoo.entity';

@Injectable()
export class TattooService {
  constructor(
    @InjectRepository(Tattoo)
    private readonly tattooRepository: Repository<Tattoo>,
  ) {}

  create({ createTattooInput }) {
    const result = this.tattooRepository.save({ ...createTattooInput });
    return result;
  }

  async findAll() {
    return this.tattooRepository.find();
  }
}
