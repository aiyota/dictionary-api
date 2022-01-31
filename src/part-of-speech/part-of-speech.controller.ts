import { Body, Controller, Post } from "@nestjs/common";
import { PartOfSpeech } from "./part-of-speech.entity";
import { PartOfSpeechService } from "./part-of-speech.service";

@Controller("part-of-speech")
export class PartOfSpeechController {
  constructor(private partOfSpeechService: PartOfSpeechService) {}

  @Post()
  createPartOfSpeech(
    @Body("partOfSpeech") partOfSpeech: string,
  ): Promise<PartOfSpeech> {
    return this.partOfSpeechService.createPartOfSpeech(partOfSpeech);
  }
}
