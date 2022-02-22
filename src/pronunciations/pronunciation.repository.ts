import { EntityRepository, Repository } from "typeorm";
import { Pronunciation } from "./pronunciation.entity";

@EntityRepository(Pronunciation)
export class PronunciationRepository extends Repository<Pronunciation> {}
