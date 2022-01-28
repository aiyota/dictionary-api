import { ConfigModule } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { strict as assert } from "assert";

ConfigModule.forRoot({
  envFilePath: "./config/.config.env",
});

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

assert(DB_HOST, "DB_HOST is not present in .env file");
assert(DB_PORT, "DB_PORT is not present in .env file");
assert(DB_USERNAME, "DB_USERNAME is not present in .env file");
assert(DB_PASSWORD, "DB_PASSWORD is not present in .env file");
assert(DB_DATABASE, "DB_DATABASE is not present in .env file");

const db: TypeOrmModuleOptions = {
  type: "mysql",
  host: DB_HOST,
  port: +DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
};

export default Object.freeze({
  db,
});
