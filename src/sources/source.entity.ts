import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Definition } from "../definitions/definition.entity";

@Entity()
@Unique(["source"])
export class Source {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  source: string;
}
