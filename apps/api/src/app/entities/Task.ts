import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { User } from './User';

@Entity()
export class Task {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  text: string;

  @Property({ default: false })
  isCompleted: boolean;

  @ManyToOne()
  user: User;
}
