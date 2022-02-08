import { ConfigModule } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { strict as assert } from "assert";

ConfigModule.forRoot({
  envFilePath: "./config/.config.env",
});

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, APP_PORT } =
  process.env;

assert(DB_HOST, "DB_HOST is not present in .env file");
assert(DB_PORT, "DB_PORT is not present in .env file");
assert(DB_USERNAME, "DB_USERNAME is not present in .env file");
assert(DB_PASSWORD, "DB_PASSWORD is not present in .env file");
assert(DB_DATABASE, "DB_DATABASE is not present in .env file");
assert(APP_PORT, "DB_DATABASE is not present in .env file");

type Config = {
  db: TypeOrmModuleOptions;
  app: {
    appPort: string;
  };
};

const db: TypeOrmModuleOptions = Object.freeze({
  type: "mysql",
  host: DB_HOST,
  port: +DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
});

const app = {
  appPort: APP_PORT,
};

const config: Config = Object.freeze({
  db,
  app,
});

export default config;
