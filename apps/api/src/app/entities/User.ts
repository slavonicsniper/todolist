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

  @Property({ nullable: false })
  name!: string;

  @Property()
  email: string;

  @OneToMany('Task', 'user')
  task = new Collection<Task>(this);

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
