import { Injectable } from "@nestjs/common";
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
}
