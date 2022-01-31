import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PartOfSpeech } from "src/part-of-speech/part-of-speech.entity";
import { Word } from "./word.entity";
import { WordsService } from "./words.service";

@Controller("words")
export class WordsController {
  mockWords = {
    words: [
      { id: 1, word: "ranch" },
      { id: 2, word: "car" },
      { id: 3, word: "keyboard" },
    ],
  };

  constructor(private wordsService: WordsService) {}

  @Get()
  words(): Promise<Word[]> {
    return this.wordsService.getWords();
  }

  @Get("/:id")
  word(@Param("id") id: string): Promise<Word> {
    return this.wordsService.getWord(id);
  }

  @Post()
  createWord(
    @Body("word") word: string,
    @Body("partOfSpeech") partOfSpeech: PartOfSpeech,
  ): Promise<Word> {
    return this.wordsService.createWord(word, partOfSpeech);
  }

  @Delete("/:id")
  deleteWord(@Param("id") id: string): Promise<Word> {
    return this.wordsService.deleteWord(id);
  }
}
