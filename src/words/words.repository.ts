import { PartOfSpeech } from "src/part-of-speech/part-of-speech.entity";
import { EntityRepository, Repository } from "typeorm";
import { Word } from "./word.entity";

@EntityRepository(Word)
export class WordsRepository extends Repository<Word> {
  async createWord(word: string, partOfSpeech: PartOfSpeech): Promise<Word> {
    const record = this.create({
      word,
      partOfSpeech,
    });

    return await this.save(record);
  }
}
