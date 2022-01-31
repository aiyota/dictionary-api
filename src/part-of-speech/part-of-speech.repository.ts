import { EntityRepository, Repository } from "typeorm";
import { PartOfSpeech } from "./part-of-speech.entity";

@EntityRepository(PartOfSpeech)
export class PartOfSpeechRepository extends Repository<PartOfSpeech> {}
