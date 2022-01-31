import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PartOfSpeechController } from "./part-of-speech.controller";
import { PartOfSpeechRepository } from "./part-of-speech.repository";
import { PartOfSpeechService } from "./part-of-speech.service";

@Module({
  imports: [TypeOrmModule.forFeature([PartOfSpeechRepository])],
  controllers: [PartOfSpeechController],
  providers: [PartOfSpeechService],
})
export class PartOfSpeechModule {}
