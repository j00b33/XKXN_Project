import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Tattoo } from './entities/tattoo.entity';

@Injectable()
export class TattooService {
  constructor(
    @InjectRepository(Tattoo)
    private readonly tattooRepository: Repository<Tattoo>,
  ) {}

  create({ createTattooInput }) {
    const { tattooGenreId, tattooist, ...rest } = createTattooInput;
    const result = this.tattooRepository.save({
      tattooGenre: tattooGenreId,
      tattooist: tattooist,
      ...rest,
    });
    return result;
  }

  // 타투 목록 전체 조회
  async findAll() {
    return await this.tattooRepository.find({
      relations: ['tattooGenre', 'tattooist'],
    });
  }

  // 장르별 조회
  async findByGenre({ tattooGenreId }) {
    return await this.tattooRepository.find({
      where: { tattooGenre: tattooGenreId },
    });
  }

  // 타투 디테일 조회 (타투 하나 조회)
  async findOne({ tattooId }) {
    return await this.tattooRepository.findOne({
      where: { id: tattooId },
      relations: ['tattooGenre', 'tattooist'],
    });
  }

  // 포트폴리오 작업 리스트 조회
  async findPort({ tattooistId }) {
    return await this.tattooRepository.find({
      where: {
        isPortfolio: true,
        tattooist: tattooistId,
      },
      relations: ['tattooGenre', 'tattooist'],
    });
  }

  async update({ tattooId, updateTattooInput }) {
    const tattoo = await this.tattooRepository.findOne({
      where: { id: tattooId },
    });

    const updatedTattoo = {
      ...tattoo,
      updateTattooInput,
    };

    return await this.tattooRepository.save(updatedTattoo);
  }
}
