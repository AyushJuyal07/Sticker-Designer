import express from "express"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import { Server } from "socket.io"
import chatHandlers from "./socket/chat.handlers"
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../shared/chat.types"

dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  })
)

const server = http.createServer(app)

const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN,
  },
})

// io.on("connection", (socket) => {
//   console.log("Client connected:", socket.id)
//   chatHandlers(io, socket)
// })

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)

  // 🔥 DEBUG: log EVERY event from frontend
  socket.onAny((event, ...args) => {
    console.log("🔥 Received event:", event, args)
  })

  chatHandlers(io, socket)
})


const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`)
})
