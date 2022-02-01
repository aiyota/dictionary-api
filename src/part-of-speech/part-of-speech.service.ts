import { Injectable, NotFoundException } from "@nestjs/common";
import { makeRecord } from "src/utils";
import { CreatePartOfSpeechDto } from "./dto/create-part-of-speech.dto";
import { PartOfSpeech } from "./part-of-speech.entity";
import { PartOfSpeechRepository } from "./part-of-speech.repository";

@Injectable()
export class PartOfSpeechService {
  constructor(private partOfSpeechRepository: PartOfSpeechRepository) {}

  async getAllPartsOfSpeech(): Promise<PartOfSpeech[]> {
    return this.partOfSpeechRepository.find();
  }

  async createPartOfSpeech(
    createPartOfSpeechDto: CreatePartOfSpeechDto,
  ): Promise<PartOfSpeech> {
    const { partOfSpeech } = createPartOfSpeechDto;

    const record = this.partOfSpeechRepository.create({
      partOfSpeech,
    });

    await this.partOfSpeechRepository.save(record);

    return record;
  }

  async editPartOfSpeech({ id, editPartOfSpeechDto }): Promise<PartOfSpeech> {
    const { partOfSpeech } = editPartOfSpeechDto;

    await this.partOfSpeechRepository.update(id, makeRecord({ partOfSpeech }));
    const editedPartOfSpeech = await this.partOfSpeechRepository.findOne({
      id,
    });
    if (!editedPartOfSpeech)
      throw new NotFoundException(
        `Part of Speech with id ${id} does not exist`,
      );

    return editedPartOfSpeech;
  }

  async deletePartOfSpeech(id: string): Promise<PartOfSpeech> {
    const deletedPartOfSpeech = await this.partOfSpeechRepository.findOne({
      id,
    });

    if (!deletedPartOfSpeech)
      throw new NotFoundException(
        `Part of Speech with id ${id} does not exist`,
      );

    await this.partOfSpeechRepository.delete(id);

    return deletedPartOfSpeech;
  }
}
