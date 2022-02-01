import { Injectable, NotFoundException } from "@nestjs/common";
import { makeRecord } from "../utils";
import CreateSourceDto from "./dto/create-source.dto";
import { Source } from "./source.entity";
import SourceRepository from "./source.repository";

@Injectable()
export class SourcesService {
  constructor(private sourceRepository: SourceRepository) {}
  async getAllSources() {
    return this.sourceRepository.find();
  }

  async createSource(createSourceDto: CreateSourceDto): Promise<Source> {
    const { source } = createSourceDto;
    const record = this.sourceRepository.create({ source });

    await this.sourceRepository.save(record);

    return record;
  }

  async editSource({ id, editSourceDto }): Promise<Source> {
    const { source } = editSourceDto;

    await this.sourceRepository.update(id, makeRecord({ source }));
    const editedSource = await this.sourceRepository.findOne({ id });
    if (!editedSource)
      throw new NotFoundException(`Source with id ${id} does not exist`);

    return editedSource;
  }

  async deleteSource(id: string): Promise<Source> {
    const deletedSource = await this.sourceRepository.findOne({ id });

    if (!deletedSource)
      throw new NotFoundException(`Source with id ${id} does not exist`);

    await this.sourceRepository.delete(id);

    return deletedSource;
  }
}
