import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { User } from './User';

@Entity()
export class Task {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  title: string;

  @Property()
  details: string;

  @Property()
  date: Date;

  @ManyToOne()
  user: User;
  constructor(title: string, details: string, date: Date) {
    this.title = title;
    this.details = details;
    this.date = date;
  }
}
