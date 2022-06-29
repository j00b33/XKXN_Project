import { Field, ObjectType } from '@nestjs/graphql';
import { Tattoo } from 'src/apis/tattoo/entities/tattoo.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ unique: true })
  @Field(() => String)
  image: string;

  @ManyToOne(() => Tattoo)
  @Field(() => Tattoo)
  tattoo: Tattoo;
  // prob: fetch할때 보면 Tattoo전체를 가져옴
}
