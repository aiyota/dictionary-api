import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { PartOfSpeech } from "./part-of-speech.entity";
import { PartOfSpeechService } from "./part-of-speech.service";

@Controller("part-of-speech")
export class PartOfSpeechController {
  constructor(private partOfSpeechService: PartOfSpeechService) {}

  @Get()
  getAllPartsOfSpeech(): Promise<PartOfSpeech[]> {
    return this.partOfSpeechService.getAllPartsOfSpeech();
  }

  @Post()
  createPartOfSpeech(
    @Body("partOfSpeech") partOfSpeech: string,
  ): Promise<PartOfSpeech> {
    return this.partOfSpeechService.createPartOfSpeech(partOfSpeech);
  }

  @Patch("/:id")
  editPartOfSpeech(
    @Param("id") id: string,
    @Body("partOfSpeech") partOfSpeech: string,
  ): Promise<PartOfSpeech> {
    return this.partOfSpeechService.editPartOfSpeech({ id, partOfSpeech });
  }

  @Delete("/:id")
  deletePartOfSpeech(@Param("id") id: string): Promise<PartOfSpeech> {
    return this.partOfSpeechService.deletePartOfSpeech(id);
  }
}
