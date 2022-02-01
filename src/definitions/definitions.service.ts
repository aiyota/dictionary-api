import { Injectable } from "@nestjs/common";
import { makeRecord } from "../utils";
import { Source } from "../sources/source.entity";
import { Word } from "../words/word.entity";
import { Definition } from "./definition.entity";
import { DefinitionsRepository } from "./definitions.repository";

@Injectable()
export class DefinitionsService {
  constructor(private definitionsRepository: DefinitionsRepository) {}

  async createDefinition(
    word: Word,
    definitionText: string,
    source: Source,
  ): Promise<Definition> {
    return this.definitionsRepository.createDefinition(
      word,
      definitionText,
      source,
    );
  }

  async editDefinition({ id, definition, word, source }) {
    await this.definitionsRepository.update(
      id,
      makeRecord({ definition, word, source }),
    );
    const editedDefinition = await this.definitionsRepository.findOne({ id });

    return editedDefinition;
  }

  async deleteDefinition(id: string) {
    const deletedDefinition = await this.definitionsRepository.findOne({ id });

    if (!deletedDefinition)
      throw new Error(`Definition with id ${id} does not exist`);

    await this.definitionsRepository.delete(id);

    return deletedDefinition;
  }
}
