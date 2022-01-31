import { Word } from "src/words/word.entity";
import { EntityRepository, Repository } from "typeorm";
import { Definition } from "./definition.entity";

@EntityRepository(Definition)
export class DefinitionsRepository extends Repository<Definition> {
  async createDefinition(word: Word, definition: string, source: string) {
    const record = this.create({ word, definition, source });

    await this.save(record);

    return record;
  }
}
