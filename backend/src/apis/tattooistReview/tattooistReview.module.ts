import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/users.entity';
import { TattooistReview } from './entities/tattooistReview.entity';
import { TattooistReviewResolver } from './tattooistReview.resolver';
import { TattooistReviewService } from './tattooistReview.service';

@Module({
  imports: [TypeOrmModule.forFeature([TattooistReview, User])],
  providers: [TattooistReviewResolver, TattooistReviewService],
})
export class TattooistReviewModule {}
