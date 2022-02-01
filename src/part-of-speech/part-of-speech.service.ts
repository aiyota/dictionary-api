import { Injectable } from "@nestjs/common";
import { makeRecord } from "src/utils";
import { PartOfSpeech } from "./part-of-speech.entity";
import { PartOfSpeechRepository } from "./part-of-speech.repository";

@Injectable()
export class PartOfSpeechService {
  constructor(private partOfSpeechRepository: PartOfSpeechRepository) {}

  async getAllPartsOfSpeech(): Promise<PartOfSpeech[]> {
    return this.partOfSpeechRepository.find();
  }

  async createPartOfSpeech(partOfSpeech: string): Promise<PartOfSpeech> {
    const record = this.partOfSpeechRepository.create({
      partOfSpeech,
    });

    await this.partOfSpeechRepository.save(record);

    return record;
  }

  async editPartOfSpeech({ id, partOfSpeech }): Promise<PartOfSpeech> {
    await this.partOfSpeechRepository.update(id, makeRecord({ partOfSpeech }));
    const editedPartOfSpeech = await this.partOfSpeechRepository.findOne({
      id,
    });

    return editedPartOfSpeech;
  }

  async deletePartOfSpeech(id: string): Promise<PartOfSpeech> {
    const deletedPartOfSpeech = await this.partOfSpeechRepository.findOne({
      id,
    });

    if (!deletedPartOfSpeech)
      throw new Error(`Part of Speech with id ${id} does not exist`);

    await this.partOfSpeechRepository.delete(id);

    return deletedPartOfSpeech;
  }
}
