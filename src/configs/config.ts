import dotenv from "dotenv"
dotenv.config()

const NODE_ENV = process.env.NODE_ENV

export default {
  PG: {
    type: "postgres",
    host: NODE_ENV === "dev" ? "localhost" : process.env.PG_HOST,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  PAGINATION: {
    page: 1,
    count: 10,
  },
}
