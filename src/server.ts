import express from "express"
import dotenv from "dotenv"
import { AppDataSource } from "./database/connection"
import cors from "cors"
import errorHandler from "./middlewares/errorHandler"

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
app.use(errorHandler)

export default app
