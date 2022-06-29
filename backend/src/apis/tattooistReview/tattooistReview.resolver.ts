import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateTattooistReviewInput } from './dto/createTattooistReview';
import { TattooistReview } from './entities/tattooistReview.entity';
import { TattooistReviewService } from './tattooistReview.service';

@Resolver()
export class TattooistReviewResolver {
  constructor(
    private readonly tattooistReviewService: TattooistReviewService,
  ) {}

  @Mutation(() => TattooistReview)
  createTattooistReview(
    @Args('createTattooistReviewInput')
    createTattooistReviewInput: CreateTattooistReviewInput,
  ) {
    return this.tattooistReviewService.create({ createTattooistReviewInput });
  }

  @Query(() => [TattooistReview])
  fetchTattooistReviews() {
    return this.tattooistReviewService.findAll();
  }
}
