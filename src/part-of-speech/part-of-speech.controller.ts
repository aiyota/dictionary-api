import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreatePartOfSpeechDto } from "./dto/create-part-of-speech.dto";
import { EditPartOfSpeechDto } from "./dto/edit-part-of-speech.dto";
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
    @Body() createPartOfSpeechDto: CreatePartOfSpeechDto,
  ): Promise<PartOfSpeech> {
    return this.partOfSpeechService.createPartOfSpeech(createPartOfSpeechDto);
  }

  @Patch("/:id")
  editPartOfSpeech(
    @Param("id") id: string,
    @Body() editPartOfSpeechDto: EditPartOfSpeechDto,
  ): Promise<PartOfSpeech> {
    return this.partOfSpeechService.editPartOfSpeech({
      id,
      editPartOfSpeechDto,
    });
  }

  @Delete("/:id")
  deletePartOfSpeech(@Param("id") id: string): Promise<PartOfSpeech> {
    return this.partOfSpeechService.deletePartOfSpeech(id);
  }
}
