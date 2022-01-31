import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WordsModule } from './words/words.module';
import { PartOfSpeechModule } from './part-of-speech/part-of-speech.module';
import { DefinitionsModule } from './definitions/definitions.module';
import config from "config/config";

@Module({
  imports: [TypeOrmModule.forRoot(config.db), WordsModule, PartOfSpeechModule, DefinitionsModule],
})
export class AppModule {}
