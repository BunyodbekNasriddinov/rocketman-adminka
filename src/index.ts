import app from "./server"
import dotenv from "dotenv"
import { createServer } from "http"

dotenv.config()

const PORT = process.env.PORT
const server = createServer(app)

server.listen(PORT, () => console.log(`Server running ${PORT} port`))
