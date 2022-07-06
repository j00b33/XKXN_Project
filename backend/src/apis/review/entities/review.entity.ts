import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  detail: string;

  @Column()
  @Field(() => String, { nullable: true })
  image: string;

  @Column()
  @Field(() => Int)
  rate: number;

  @ManyToOne(() => User)
  @Field(() => User)
  tattooist: User;
}
