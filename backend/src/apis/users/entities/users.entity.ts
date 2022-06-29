import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn({ unique: true })
  @Field(() => String)
  id: string;

  @Column({ nullable: true })
  @Field(() => String)
  userImage: string;

  @Column({ unique: true })
  @Field(() => String)
  name: string;

  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Column({ unique: true })
  @Field(() => String)
  phoneNumber: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  @Field(() => String)
  userDetail: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isTattooist: boolean;

  // user 수정 날짜
  @UpdateDateColumn()
  updatedAt: Date;

  // 탈퇴 날짜
  @DeleteDateColumn()
  deletedAt: Date;
}
