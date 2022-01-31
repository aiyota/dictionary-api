import { Injectable } from "@nestjs/common";
import { Word } from "./word.entity";
import { WordsRepository } from "./words.repository";

@Injectable()
export class WordsService {
  constructor(private wordsRepository: WordsRepository) {}

  getWords(): Promise<Word[]> {
    return this.wordsRepository.find();
  }

  getWord(id: string): Promise<Word> {
    return this.wordsRepository.findOne({ id });
  }

  createWord(word: string, partOfSpeech: string): Promise<Word> {
    return this.wordsRepository.createWord(word, partOfSpeech);
  }

  async deleteWord(id: string) {
    const deletedWord = await this.wordsRepository.findOne({ id });
    if (!deletedWord) throw new Error(`Word with id ${id} does not exist`);

    await this.wordsRepository.delete(id);
    return deletedWord;
  }
}
