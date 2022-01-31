import { Body, Controller, Post } from "@nestjs/common";
import { Word } from "../words/word.entity";
import { Definition } from "./definition.entity";
import { DefinitionsService } from "./definitions.service";

@Controller("definitions")
export class DefinitionsController {
  constructor(private definitionsService: DefinitionsService) {}

  @Post()
  createDefinition(
    @Body("definition") definition: string,
    @Body("word") word: Word,
    @Body("source") source: string,
  ): Promise<Definition> {
    definition = definition.trim().replace(/\s+/gm, " ");
    return this.definitionsService.createDefinition(word, definition, source);
  }
}
