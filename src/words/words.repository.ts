import { EntityRepository, Repository } from "typeorm";
import { Word } from "./word.entity";

@EntityRepository(Word)
export class WordsRepository extends Repository<Word> {
  async createWord(word: string, partOfSpeech: string): Promise<Word> {
    const record = this.create({
      word,
      partOfSpeech,
    });

    return await this.save(record);
  }
}
