import { Region } from "src/regions/regions.entity";
import { Source } from "src/sources/source.entity";
import { Word } from "src/words/word.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pronunciation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((_type) => Word, (word) => word.pronunciations, {
    eager: false,
    onDelete: "CASCADE",
  })
  word: Word;

  @Column()
  ipa: string;

  @Column({ type: "varchar", nullable: true })
  audioUrl!: string;

  @ManyToOne((_type) => Region, (region) => region.id, {
    eager: true,
    onDelete: "CASCADE",
  })
  region: Region;

  @ManyToOne((_type) => Source, (source) => source.id, {
    eager: true,
    onDelete: "CASCADE",
  })
  source: Source;
}
