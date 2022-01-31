import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DefinitionsController } from "./definitions.controller";
import { DefinitionsRepository } from "./definitions.repository";
import { DefinitionsService } from "./definitions.service";

@Module({
  imports: [TypeOrmModule.forFeature([DefinitionsRepository])],
  controllers: [DefinitionsController],
  providers: [DefinitionsService],
})
export class DefinitionsModule {}
