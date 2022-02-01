import { Definition } from "../definitions/definition.entity";
import { PartOfSpeech } from "../part-of-speech/part-of-speech.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
@Unique("UQ_Words", ["word", "partOfSpeech"])
export class Word {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  word: string;

  @ManyToOne((_type) => PartOfSpeech, (partOfSpeech) => partOfSpeech.id, {
    eager: true,
  })
  partOfSpeech: PartOfSpeech;

  @OneToMany((_type) => Definition, (definition) => definition.word, {
    eager: true,
  })
  definitions: Definition[];

  @Column()
  etymology: string;
}
