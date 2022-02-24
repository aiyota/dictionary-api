import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatePronunciationDto } from "./dto/create-pronunciation.dto";
import { Pronunciation } from "./pronunciation.entity";
import { PronunciationsService } from "./pronunciations.service";

@Controller("pronunciations")
export class PronunciationsController {
  constructor(private pronunciationsService: PronunciationsService) {}

  @Post()
  CreatePronunciation(
    @Body() createPronunciationDto: CreatePronunciationDto,
  ): Promise<Pronunciation> {
    return this.pronunciationsService.createPronunciation(
      createPronunciationDto,
    );
  }
}
