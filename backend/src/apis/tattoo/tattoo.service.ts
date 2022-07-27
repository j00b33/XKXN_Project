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

  // 타투 게시글 생성
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
  async findAll({ tattooGenreId }) {
    if (tattooGenreId === 0) {
      return await this.tattooRepository.find({
        relations: ['tattooGenre', 'tattooist'],
      });
    }
    return await this.tattooRepository.find({
      where: { tattooGenre: tattooGenreId },
      relations: ['tattooGenre', 'tattooist'],
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

  // 포트폴리오가 아닌 both isSold true false 작품들
  async fetchCreatedTattoos({ tattooistId }) {
    return await this.tattooRepository.find({
      where: {
        isPortfolio: false,
        tattooist: tattooistId,
      },
    });
  }

  // 각각 장르중 베스트 3개 fetch
  // async hotGenre({ tattooGenreId }) {
  //   return await this.tattooRepository.find({
  //     where: { tattooGenre: tattooGenreId },
  //     relations: ['tattooGenre', 'tattooist'],
  //   });
  // }

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

  async markSold({ tattooId }) {
    const tattoo = await this.tattooRepository.findOne({
      where: { id: tattooId },
    });

    const updateTattoo = {
      ...tattoo,
      isSold: true,
    };

    return await this.tattooRepository.save(updateTattoo);
  }

  async markDone({ tattooId }) {
    const tattoo = await this.tattooRepository.findOne({
      where: { id: tattooId },
    });

    if (!tattoo.isSold) {
      return "This tattoo isn't registered";
    }

    const updateTattoo = {
      ...tattoo,
      isDone: true,
    };

    await this.tattooRepository.save(updateTattoo);

    return 'Marked Done';
  }

  async likeTattoo({ tattooId }) {
    const tattoo = await this.tattooRepository.findOne({
      where: { id: tattooId },
    });

    await this.tattooRepository.update(
      { id: tattooId },
      { likes: tattoo.likes + 1 },
    );

    return 'Liked Tattoo';
  }

  async cancelLike({ tattooId }) {
    const tattoo = await this.tattooRepository.findOne({
      where: { id: tattooId },
    });

    await this.tattooRepository.update(
      { id: tattooId },
      { likes: tattoo.likes - 1 },
    );

    return 'Canceled Like';
  }
}
