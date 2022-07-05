import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTattooInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  detail: string;

  @Field(() => String)
  region: string;

  @Field(() => String)
  size: string;

  @Field(() => String)
  period: string;

  @Field(() => Int)
  tattooGenreId: number;

  @Field(() => Boolean)
  isPortfolio: boolean;

  @Field(() => String, { nullable: true })
  tattooImageUrl: string;
}
