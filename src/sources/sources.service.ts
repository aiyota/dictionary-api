import { Injectable } from "@nestjs/common";
import { Source } from "./source.entity";
import SourceRepository from "./source.repository";

@Injectable()
export class SourcesService {
  constructor(private sourceRepository: SourceRepository) {}

  async createSource(source: string): Promise<Source> {
    const record = this.sourceRepository.create({ source });

    await this.sourceRepository.save(record);

    return record;
  }
}
