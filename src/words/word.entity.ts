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
import { Pronunciation } from "src/pronunciations/pronunciation.entity";

@Entity()
@Unique("UQ_Words", ["word", "partOfSpeech"])
export class Word {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  word: string;

  @ManyToOne((_type) => PartOfSpeech, (partOfSpeech) => partOfSpeech.id, {
    eager: true,
    onDelete: "SET NULL",
  })
  partOfSpeech: PartOfSpeech;

  @OneToMany((_type) => Definition, (definition) => definition.word, {
    eager: true,
  })
  definitions: Definition[];

  @OneToMany((_type) => Pronunciation, (pronunciation) => pronunciation.word, {
    eager: true,
  })
  pronunciations: Pronunciation[];

  @Column()
  etymology: string;
}
