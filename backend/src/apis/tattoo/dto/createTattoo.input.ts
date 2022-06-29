import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTattooInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => String, { nullable: true })
  detail: string;

  @Field()
  period: string;

  @Field()
  region: string;

  @Field(() => Int)
  tattooGenreId: number;

  @Field(() => String)
  size: string;

  @Field(() => [String])
  tattooTags: string[];
}
