import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "config/config";

@Module({
  imports: [TypeOrmModule.forRoot(config.db)],
})
export class AppModule {}
