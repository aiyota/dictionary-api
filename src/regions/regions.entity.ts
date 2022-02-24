import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Region {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  region: string;

  @Column()
  abbreviation: string;
}
