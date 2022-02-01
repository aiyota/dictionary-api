import { PartOfSpeech } from "../part-of-speech/part-of-speech.entity";
import { EntityRepository, Like, Repository } from "typeorm";
import { Word } from "./word.entity";

@EntityRepository(Word)
export class WordsRepository extends Repository<Word> {
  async createWord(
    word: string,
    partOfSpeech: PartOfSpeech,
    etymology: string,
  ): Promise<Word> {
    const record = this.create({
      word,
      partOfSpeech,
      etymology,
    });

    return await this.save(record);
  }

  async searchWord(search: string): Promise<Word[]> {
    return this.find({ where: { word: Like(`%${search}%`) } });
  }
}
