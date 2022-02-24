import { EntityRepository, Repository } from "typeorm";
import { CreateRegionDto } from "./dto/create-region.dto";
import { Region } from "./regions.entity";

@EntityRepository(Region)
export class RegionRepository extends Repository<Region> {
  async createRegion(createRegionDto: CreateRegionDto): Promise<Region> {
    const record = this.create({ ...createRegionDto });

    await this.save(record);

    return record;
  }
}
