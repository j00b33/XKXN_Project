import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateReviewInput } from './dto/createReview.input';
import { Review } from './entities/review.entity';
import { ReviewService } from './review.service';

@Resolver()
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() => Review)
  async createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ) {
    return this.reviewService.create({ createReviewInput });
  }

  @Query(() => Review)
  async fetchReview(@Args('reviewId') reviewId: string) {
    return this.reviewService.findOne({ reviewId });
  }

  @Query(() => [Review])
  async fetchReviews(@Args('tattooistId') tattooistId: string) {
    return this.reviewService.findAll({ tattooistId });
  }
}
