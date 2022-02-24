import { Injectable } from "@nestjs/common";
import { CreatePronunciationDto } from "./dto/create-pronunciation.dto";
import { Pronunciation } from "./pronunciation.entity";
import { PronunciationRepository } from "./pronunciation.repository";

@Injectable()
export class PronunciationsService {
  constructor(private pronunciationRepository: PronunciationRepository) {}

  async createPronunciation(
    createPronunciationDto: CreatePronunciationDto,
  ): Promise<Pronunciation> {
    console.log(createPronunciationDto);
    // save pronunciation

    // test response
    return new Pronunciation();
  }
}
