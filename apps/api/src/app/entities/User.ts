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

  @Property()
  name!: string;

  @Property({ unique: true })
  email!: string;

  @OneToMany('Task', 'user')
  task = new Collection<Task>(this);

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
