import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Word {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  word: string;

  @Column()
  partOfSpeech: string;

  definitions: string[];
}
