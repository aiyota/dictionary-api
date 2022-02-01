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
import CreateWordDto from "./dto/create-word.dto";
import EditWordDto from "./dto/edit-word.dto";
import { Word } from "./word.entity";
import { WordsService } from "./words.service";

@Controller("words")
export class WordsController {
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
  createWord(@Body() createWordDto: CreateWordDto): Promise<Word> {
    return this.wordsService.createWord(createWordDto);
  }

  @Patch("/:id")
  editWord(@Param("id") id: string, @Body() editWordDto: EditWordDto) {
    return this.wordsService.editWord({ id, editWordDto });
  }

  @Delete("/:id")
  deleteWord(@Param("id") id: string): Promise<Word> {
    return this.wordsService.deleteWord(id);
  }
}
