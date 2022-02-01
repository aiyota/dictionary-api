import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { PartOfSpeech } from "../part-of-speech/part-of-speech.entity";
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

  @Get("/search/:search")
  search(@Param("search") search: string): Promise<Word[]> {
    return this.wordsService.searchWord(search);
  }

  @Post()
  createWord(
    @Body("word") word: string,
    @Body("partOfSpeech") partOfSpeech: PartOfSpeech,
    @Body("etymology") etymology: string,
  ): Promise<Word> {
    return this.wordsService.createWord(word, partOfSpeech, etymology);
  }

  @Patch("/:id")
  editWord(
    @Param("id") id: string,
    @Body("word") word: string,
    @Body("partOfSpeech") partOfSpeech: PartOfSpeech,
    @Body("etymology") etymology: string,
  ) {
    return this.wordsService.editWord({ id, word, partOfSpeech, etymology });
  }

  @Delete("/:id")
  deleteWord(@Param("id") id: string): Promise<Word> {
    return this.wordsService.deleteWord(id);
  }
}
