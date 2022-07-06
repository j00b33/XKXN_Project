import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn({ unique: true })
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Boolean)
  isTattooist: boolean;

  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Column({ unique: true })
  @Field(() => String)
  phoneNumber: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  detail: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  image: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  @Field(() => Int)
  likes: number;
}
