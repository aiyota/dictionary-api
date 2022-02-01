import { PartOfSpeech } from "../part-of-speech/part-of-speech.entity";
import { EntityRepository, Like, Repository } from "typeorm";
import { Word } from "./word.entity";
import CreateWordDto from "./dto/create-word.dto";

@EntityRepository(Word)
export class WordsRepository extends Repository<Word> {
  async createWord(createWordDto: CreateWordDto): Promise<Word> {
    const { word, partOfSpeech, etymology } = createWordDto;
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
