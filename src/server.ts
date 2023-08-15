import express, { Application } from "express"
import {createServer} from "http"
import mongoose from "mongoose";
import routers from "./modules/index"
import cors from "cors"
import dotenv from "dotenv"
import errorHandler from "./middlewares/errorHandler";

dotenv.config()

const app:Application = express()

app.use(express.json())
app.use(cors())
app.use(errorHandler)
app.use(routers)


mongoose
    .connect('mongodb://127.0.0.1/rocketman_backend')
    .then((d) => console.log("db connection"))
    .catch((e:any) => console.log("db error", e.message));

const server = createServer(app)


server.listen(4000 , () => console.log("server running port 4000"))

