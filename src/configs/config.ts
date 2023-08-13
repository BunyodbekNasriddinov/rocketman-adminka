import dotenv from "dotenv"
dotenv.config()

const NODE_ENV = process.env.NODE_ENV

export default {
  PG: {
    type: "postgres",
    host: NODE_ENV == "dev" ? "localhost" : process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  PAGINATION: {
    page: 1,
    count: 10,
  },
}
