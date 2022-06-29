import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/users.entity';
import { TattooistReview } from './entities/tattooistReview.entity';

@Injectable()
export class TattooistReviewService {
  constructor(
    @InjectRepository(TattooistReview)
    private readonly tattooistReviewRepository: Repository<TattooistReview>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ createTattooistReviewInput }) {
    const { tattooist, ...rest } = createTattooistReviewInput;

    const tattooistName = await this.userRepository.findOne({
      name: tattooist,
    });

    if (!tattooistName) {
      throw new ConflictException('존재하지 않는 타투이스트 이름입니다');
    }

    const result = await this.tattooistReviewRepository.save({
      ...rest,
      tattooist: tattooistName,
    });

    console.log(' 💐 ', result);
    return result;
  }

  async findAll() {
    return await this.tattooistReviewRepository.find({
      relations: ['tattooist'],
    });
  }
}
