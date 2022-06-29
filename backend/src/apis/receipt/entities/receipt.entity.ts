import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Tattoo } from 'src/apis/tattoo/entities/tattoo.entity';
import { User } from 'src/apis/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum RECEIPT_STATUS_ENUM {
  PURCHASED = 'PURCHASED',
  CANCELLED = 'CANCELLED',
}

registerEnumType(RECEIPT_STATUS_ENUM, {
  name: 'RECEIPT_STATUS_ENUM',
});

@Entity()
@ObjectType()
export class Receipt {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field(() => String)
  impUid: string;

  @Column()
  @Field(() => Int)
  price: number;

  @ManyToOne(() => Tattoo)
  @Field(() => Tattoo)
  tattooId: Tattoo;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @CreateDateColumn()
  @Field(() => Date)
  purchasedAt: Date;

  @Column({ type: 'enum', enum: RECEIPT_STATUS_ENUM })
  @Field(() => String)
  status: string;
}
