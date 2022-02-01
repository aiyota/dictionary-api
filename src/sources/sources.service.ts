import { Injectable } from "@nestjs/common";
import { Source } from "./source.entity";
import SourceRepository from "./source.repository";

@Injectable()
export class SourcesService {
  constructor(private sourceRepository: SourceRepository) {}
  async getAllSources() {
    return this.sourceRepository.find();
  }

  async createSource(source: string): Promise<Source> {
    const record = this.sourceRepository.create({ source });

    await this.sourceRepository.save(record);

    return record;
  }

  async editSource({ id, source }): Promise<Source> {
    await this.sourceRepository.update(id, { source });
    const editedSource = await this.sourceRepository.findOne({ id });

    return editedSource;
  }

  async deleteSource(id: string): Promise<Source> {
    const deletedSource = await this.sourceRepository.findOne({ id });

    if (!deletedSource) throw new Error(`Source with id ${id} does not exist`);

    await this.sourceRepository.delete(id);

    return deletedSource;
  }
}
