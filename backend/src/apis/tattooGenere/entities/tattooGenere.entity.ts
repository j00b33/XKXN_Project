import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class TattooGenre {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  genre: string;
}

// 장르
