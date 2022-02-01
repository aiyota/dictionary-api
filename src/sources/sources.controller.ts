import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import CreateSourceDto from "./dto/create-source.dto";
import EditSourceDto from "./dto/edit-source.dto";
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
  createSource(@Body() createSourceDto: CreateSourceDto): Promise<Source> {
    return this.sourcesService.createSource(createSourceDto);
  }

  @Patch("/:id")
  editSource(
    @Param("id") id: string,
    @Body() editSourceDto: EditSourceDto,
  ): Promise<Source> {
    return this.sourcesService.editSource({ id, editSourceDto });
  }

  @Delete("/:id")
  deleteSource(@Param("id") id: string): Promise<Source> {
    return this.sourcesService.deleteSource(id);
  }
}
