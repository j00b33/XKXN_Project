import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  create({ createReviewInput }) {
    const { tattooistId, ...rest } = createReviewInput;
    const result = this.reviewRepository.save({
      tattooist: tattooistId,
      ...rest,
    });
    return result;
  }

  findOne({ reviewId }) {
    return this.reviewRepository.findOne({
      where: { id: reviewId },
      relations: ['tattooist'],
    });
  }

  findAll({ tattooistId }) {
    return this.reviewRepository.find({
      where: { tattooist: tattooistId },
      relations: ['tattooist'],
    });
  }
}
