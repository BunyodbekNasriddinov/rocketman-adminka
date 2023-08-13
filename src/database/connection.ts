import { resolve } from "path"
import { DataSource } from "typeorm"
import config from "../configs/config"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.PG.host,
  port: 5432,
  username: config.PG.username,
  password: config.PG.password,
  database: config.PG.database,
  synchronize: true,
  entities: [resolve("src", "modules", "**", "*.entity.{ts,js}")],
})
