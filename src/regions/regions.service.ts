import { Injectable } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { RegionRepository } from "./region.repository";
import { Region } from "./regions.entity";

@Injectable()
export class RegionsService {
  constructor(private regionRepository: RegionRepository) {}

  createRegion(createRegionDto: CreateRegionDto): Promise<Region> {
    return this.regionRepository.createRegion(createRegionDto);
  }
}
