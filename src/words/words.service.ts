import { Injectable } from "@nestjs/common";
import { PartOfSpeech } from "../part-of-speech/part-of-speech.entity";
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

  createWord(
    word: string,
    partOfSpeech: PartOfSpeech,
    etymology: string,
  ): Promise<Word> {
    return this.wordsRepository.createWord(word, partOfSpeech, etymology);
  }

  async deleteWord(id: string) {
    const deletedWord = await this.wordsRepository.findOne({ id });
    if (!deletedWord) throw new Error(`Word with id ${id} does not exist`);

    await this.wordsRepository.delete(id);
    return deletedWord;
  }
}
