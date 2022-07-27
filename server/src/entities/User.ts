import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field((_type) => ID)
  @PrimaryGeneratedColumn() // auto nhay so
  id!: number; // khong dc null, kieu so

  @Field()
  @Column({ unique: true }) // cac username phai khac nhau
  username!: string; // khong dc null, kieu string

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  //   @OneToMany(() => Post, (post) => post.user)
  //   posts: Post[];

  //   @OneToMany((_to) => Upvote, (upvote) => upvote.user)
  //   upvotes: Upvote[];
  @Field()
  @CreateDateColumn()
  createdAt: Date;
  
  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
