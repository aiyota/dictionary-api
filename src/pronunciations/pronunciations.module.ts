import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PronunciationRepository } from "./pronunciation.repository";
import { PronunciationsController } from "./pronunciations.controller";
import { PronunciationsService } from "./pronunciations.service";

@Module({
  imports: [TypeOrmModule.forFeature([PronunciationRepository])],
  controllers: [PronunciationsController],
  providers: [PronunciationsService],
})
export class PronunciationsModule {}
