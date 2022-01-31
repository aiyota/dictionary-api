import { Injectable } from "@nestjs/common";
import { PartOfSpeech } from "./part-of-speech.entity";
import { PartOfSpeechRepository } from "./part-of-speech.repository";

@Injectable()
export class PartOfSpeechService {
  constructor(private partOfSpeechRepository: PartOfSpeechRepository) {}

  async createPartOfSpeech(partOfSpeech: string): Promise<PartOfSpeech> {
    const record = this.partOfSpeechRepository.create({
      partOfSpeech,
    });

    await this.partOfSpeechRepository.save(record);

    return record;
  }
}
