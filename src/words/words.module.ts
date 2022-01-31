import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WordsController } from "./words.controller";
import { WordsRepository } from "./words.repository";
import { WordsService } from "./words.service";

@Module({
  imports: [TypeOrmModule.forFeature([WordsRepository])],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
