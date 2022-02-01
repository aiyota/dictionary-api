import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
import { Source } from "src/sources/source.entity";
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
    @Body("source") source: Source,
  ): Promise<Definition> {
    definition = definition.trim().replace(/\s+/gm, " ");
    return this.definitionsService.createDefinition(word, definition, source);
  }

  @Patch("/:id")
  editDefinition(
    @Param("id") id: string,
    @Body("definition") definition: string,
    @Body("word") word: Word,
    @Body("source") source: Source,
  ): Promise<Definition> {
    return this.definitionsService.editDefinition({
      id,
      definition,
      word,
      source,
    });
  }

  @Delete("/:id")
  deleteDefinition(@Param("id") id: string): Promise<Definition> {
    return this.definitionsService.deleteDefinition(id);
  }
}
