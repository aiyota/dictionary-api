import { Injectable } from "@nestjs/common";
import { makeRecord } from "src/utils";
import { CreatePronunciationDto } from "./dto/create-pronunciation.dto";
import { Pronunciation } from "./pronunciation.entity";
import { PronunciationRepository } from "./pronunciation.repository";

@Injectable()
export class PronunciationsService {
  constructor(private pronunciationRepository: PronunciationRepository) {}

  async createPronunciation(
    createPronunciationDto: CreatePronunciationDto,
  ): Promise<Pronunciation> {
    return this.pronunciationRepository.createPronunciation(
      createPronunciationDto,
    );
  }
}
