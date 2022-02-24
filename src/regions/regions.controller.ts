import { Body, Controller, Post } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { Region } from "./regions.entity";
import { RegionsService } from "./regions.service";

@Controller("regions")
export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  @Post()
  createRegion(@Body() createRegionDto: CreateRegionDto): Promise<Region> {
    return this.regionsService.createRegion(createRegionDto);
  }
}
