import { Injectable, NotFoundException } from "@nestjs/common";
import { makeRecord } from "../utils";
import { Source } from "../sources/source.entity";
import { Word } from "../words/word.entity";
import { Definition } from "./definition.entity";
import { DefinitionsRepository } from "./definitions.repository";
import { CreateDefinitionDto } from "./dto/create-definition.dto";

@Injectable()
export class DefinitionsService {
  constructor(private definitionsRepository: DefinitionsRepository) {}

  async createDefinition(
    createDefinitionDto: CreateDefinitionDto,
  ): Promise<Definition> {
    const { word, definition, source } = createDefinitionDto;
    return this.definitionsRepository.createDefinition(
      word,
      definition,
      source,
    );
  }

  async editDefinition({ id, definition, word, source }) {
    await this.definitionsRepository.update(
      id,
      makeRecord({ definition, word, source }),
    );
    const editedDefinition = await this.definitionsRepository.findOne({ id });
    if (!editedDefinition)
      throw new NotFoundException(
        `Definition with the id of ${id} does not exist`,
      );

    return editedDefinition;
  }

  async deleteDefinition(id: string) {
    const deletedDefinition = await this.definitionsRepository.findOne({ id });

    if (!deletedDefinition)
      throw new NotFoundException(`Definition with id ${id} does not exist`);

    await this.definitionsRepository.delete(id);

    return deletedDefinition;
  }
}
