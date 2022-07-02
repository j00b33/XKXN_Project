import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTattooInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  detail: string;
}
