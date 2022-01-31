import { PartOfSpeech } from "src/part-of-speech/part-of-speech.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Word {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  word: string;

  @ManyToOne((_type) => PartOfSpeech, (partOfSpeech) => partOfSpeech.id, {
    eager: true,
  })
  partOfSpeech: PartOfSpeech;

  definitions: string[];
}
