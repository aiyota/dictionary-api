import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["source"])
export class Source {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  source: string;
}
