import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegionRepository } from "./region.repository";
import { RegionsController } from "./regions.controller";
import { RegionsService } from "./regions.service";

@Module({
  imports: [TypeOrmModule.forFeature([RegionRepository])],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
