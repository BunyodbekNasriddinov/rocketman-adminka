import express from "express"
import dotenv from "dotenv"
import { AppDataSource } from "./database/connection"
import cors from "cors"

dotenv.config()

const app = express()

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected.")
  })
  .catch((err) => {
    console.error("DB Error: ", err)
  })

app.use(express.json())
app.use(cors)

export default app
