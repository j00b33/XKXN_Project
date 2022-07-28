import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isTattooist: boolean;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String, { nullable: true })
  detail: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => String)
  password: string;

  @Field(() => Boolean)
  igExists: boolean;
}
