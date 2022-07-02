import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Tattoo {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ nullable: true })
  @Field(() => String)
  detail: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isSold: boolean;

  @CreateDateColumn()
  date: Date;
}
