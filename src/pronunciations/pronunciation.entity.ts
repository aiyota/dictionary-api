import { Source } from "src/sources/source.entity";
import { Word } from "src/words/word.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pronunciation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((_type) => Word, (word) => word.definitions, {
    eager: false,
    onDelete: "CASCADE",
  })
  word: Word;

  @Column()
  ipa: string;

  @Column()
  audioUrl: string;

  @Column() // todo make regions entity
  region: string;

  @ManyToOne((_type) => Source, (source) => source.id, {
    eager: true,
    onDelete: "CASCADE",
  })
  source: Source;
}
