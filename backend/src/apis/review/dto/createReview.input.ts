import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(() => String)
  detail: string;

  @Field(() => Int)
  rate: number;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => String)
  tattooistId: string;
}
