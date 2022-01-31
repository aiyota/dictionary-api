import { Word } from "../words/word.entity";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
@Unique("UQ_Definitions", ["word", "definition"])
export class Definition {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((_type) => Word, (word) => word.definitions, {
    eager: false,
    onDelete: "CASCADE",
  })
  word: Word;

  @Column()
  definition: string;

  @Column()
  source: string;
}
