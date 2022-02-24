import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreatePronunciationDto } from "./dto/create-pronunciation.dto";
import { Pronunciation } from "./pronunciation.entity";
import { PronunciationsService } from "./pronunciations.service";

@Controller("pronunciations")
export class PronunciationsController {
  constructor(private pronunciationsService: PronunciationsService) {}

  @Post()
  createPronunciation(
    @Body() createPronunciationDto: CreatePronunciationDto,
  ): Promise<Pronunciation> {
    return this.pronunciationsService.createPronunciation(
      createPronunciationDto,
    );
  }

  @Get("/word/:wordId")
  getPronunciationsByWordId(
    @Param("wordId") wordId: string,
  ): Promise<Pronunciation[]> {
    return this.pronunciationsService.getPronunciationsByWordId(wordId);
  }
}
