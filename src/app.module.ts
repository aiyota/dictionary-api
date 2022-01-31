import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WordsModule } from './words/words.module';
import config from "config/config";

@Module({
  imports: [TypeOrmModule.forRoot(config.db), WordsModule],
})
export class AppModule {}
