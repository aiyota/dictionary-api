import { Injectable } from "@nestjs/common";
import { RegionRepository } from "./region.repository";

@Injectable()
export class RegionsService {
  constructor(private regionRepsitory: RegionRepository) {}
}
