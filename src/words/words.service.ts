import { Injectable } from "@nestjs/common";
import { makeRecord } from "../utils";
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

  searchWord(search: string): Promise<Word[]> {
    return this.wordsRepository.searchWord(search);
  }

  createWord(
    word: string,
    partOfSpeech: PartOfSpeech,
    etymology: string,
  ): Promise<Word> {
    return this.wordsRepository.createWord(word, partOfSpeech, etymology);
  }

  async editWord({ id, word, partOfSpeech, etymology }): Promise<Word> {
    await this.wordsRepository.update(
      id,
      makeRecord({ word, partOfSpeech, etymology }),
    );
    const editedWord = await this.wordsRepository.findOne({ id });

    return editedWord;
  }

  async deleteWord(id: string): Promise<Word> {
    const deletedWord = await this.wordsRepository.findOne({ id });
    if (!deletedWord) throw new Error(`Word with id ${id} does not exist`);

    await this.wordsRepository.delete(id);
    return deletedWord;
  }
}
