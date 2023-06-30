import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Task } from './Task';

@Entity()
export class User {
  @PrimaryKey()
  uuid: string = v4();

  @Property({ unique: true })
  username!: string;

  @Property({ unique: true })
  discordId!: string;

  @Property()
  discriminator!: string;

  @Property()
  avatar: string;

  @OneToMany('Task', 'user')
  task = new Collection<Task>(this);
}
