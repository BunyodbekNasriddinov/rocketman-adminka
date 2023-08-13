import { resolve } from "path"
import { DataSource } from "typeorm"
import config from "../configs/config"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.PG.host,
  port: 3306,
  username: config.PG.username,
  password: config.PG.password,
  database: config.PG.password,
  entities: [resolve("src", "modules", "*.entity.{ts,js}")],
})
