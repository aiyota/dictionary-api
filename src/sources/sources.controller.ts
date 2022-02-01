import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { Source } from "./source.entity";
import { SourcesService } from "./sources.service";

@Controller("sources")
export class SourcesController {
  constructor(private sourcesService: SourcesService) {}

  @Get()
  getAllSources(): Promise<Source[]> {
    return this.sourcesService.getAllSources();
  }

  @Post()
  createSource(@Body("source") source: string): Promise<Source> {
    return this.sourcesService.createSource(source);
  }

  @Patch("/:id")
  editSource(
    @Param("id") id: string,
    @Body("source") source: string,
  ): Promise<Source> {
    return this.sourcesService.editSource({ id, source });
  }

  @Delete("/:id")
  deleteSource(@Param("id") id: string): Promise<Source> {
    return this.sourcesService.deleteSource(id);
  }
}
