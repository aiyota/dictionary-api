import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["partOfSpeech"])
export class PartOfSpeech {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  partOfSpeech: string;
}
