import { EntityRepository, Repository } from "typeorm";
import { Region } from "./regions.entity";

@EntityRepository(Region)
export class RegionRepository extends Repository<Region> {}
