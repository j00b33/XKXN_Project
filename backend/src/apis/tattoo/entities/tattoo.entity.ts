import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TattooGenre } from 'src/apis/tattooGenre/entities/tattooGenre.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
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

  @Column()
  @Field(() => String)
  region: string;

  @Column()
  @Field(() => String)
  period: string;

  @Column()
  @Field(() => String)
  size: string;

  @ManyToOne(() => TattooGenre)
  @Field(() => TattooGenre)
  tattooGenre: TattooGenre;

  @CreateDateColumn()
  @Field(() => Date)
  date: Date;

  // 판매 (예약) 여부
  @Column({ default: false })
  @Field(() => Boolean)
  isSold: boolean;

  // 작업 완료 여부
  @Column({ default: false })
  @Field(() => Boolean)
  isDone: boolean;

  // 포트폴리오 여부
  @Column({ default: false })
  @Field(() => Boolean)
  isPortfolio: boolean;

  @Column({ default: 0 })
  @Field(() => Int)
  likes: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  tattooImageUrl: string;

  @ManyToOne(() => User)
  @Field(() => User)
  tattooist: User;
}
