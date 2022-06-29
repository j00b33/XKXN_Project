import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTattooistReviewInput {
  @Field(() => String)
  reviewDetail: string;

  @Field(() => String, { nullable: true })
  reviewImage: string;

  @Field(() => Int)
  rating: number;

  @Field(() => String)
  tattooist: string;
}
