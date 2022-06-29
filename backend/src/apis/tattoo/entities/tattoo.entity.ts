import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TattooGenre } from 'src/apis/tattooGenere/entities/tattooGenere.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/apis/users/entities/users.entity';

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
  @Field(() => String, { nullable: true })
  detail: string;

  @Column()
  @Field(() => String)
  period: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => String)
  size: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isSold: boolean;

  @Column({ default: false })
  @Field(() => Boolean)
  isDone: boolean;

  @Column()
  @Field(() => String)
  region: string;

  @ManyToOne(() => TattooGenre)
  @Field(() => TattooGenre)
  tattooGenre: TattooGenre;

  @ManyToOne(() => User)
  @Field(() => User)
  purchaser: User;

  @ManyToOne(() => User)
  @Field(() => User)
  tattooist: User;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
