import { Body, Controller, Post } from "@nestjs/common";
import { Source } from "./source.entity";
import { SourcesService } from "./sources.service";

@Controller("sources")
export class SourcesController {
  constructor(private sourcesService: SourcesService) {}

  @Post()
  createSource(@Body("source") source: string): Promise<Source> {
    return this.sourcesService.createSource(source);
  }
}
