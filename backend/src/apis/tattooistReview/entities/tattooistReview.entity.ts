import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class TattooistReview {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  reviewDetail: string;

  @Column({ nullable: true })
  @Field(() => String)
  reviewImage: string;

  @Column()
  @Field(() => Int)
  rating: number;

  @ManyToOne(() => User)
  @Field(() => User)
  tattooist: User;
}

// { default: 'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}
