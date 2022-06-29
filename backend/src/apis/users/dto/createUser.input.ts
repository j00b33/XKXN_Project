import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  userImage: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  userDetail: string;

  @Field(() => Boolean)
  isTattooist: boolean;
}
