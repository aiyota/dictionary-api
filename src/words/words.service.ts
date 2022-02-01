import { Injectable } from "@nestjs/common";
import { makeRecord } from "../utils";
import { PartOfSpeech } from "../part-of-speech/part-of-speech.entity";
import { Word } from "./word.entity";
import { WordsRepository } from "./words.repository";
import CreateWordDto from "./dto/create-word.dto";

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

  createWord(createWordDto: CreateWordDto): Promise<Word> {
    return this.wordsRepository.createWord(createWordDto);
  }

  async editWord({ id, editWordDto }): Promise<Word> {
    const { word, partOfSpeech, etymology } = editWordDto;

    await this.wordsRepository.update(
      id,
      makeRecord({ word, partOfSpeech, etymology }),
    );
    const editedWord = await this.wordsRepository.findOne({ id });
    if (!editedWord) throw new Error(`Word with id of ${id} does not exist`);

    return editedWord;
  }

  async deleteWord(id: string): Promise<Word> {
    const deletedWord = await this.wordsRepository.findOne({ id });
    if (!deletedWord) throw new Error(`Word with id ${id} does not exist`);

    await this.wordsRepository.delete(id);
    return deletedWord;
  }
}
