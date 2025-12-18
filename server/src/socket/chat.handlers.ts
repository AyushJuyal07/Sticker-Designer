import { Server, Socket } from "socket.io"
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../../shared/chat.types"

export default function chatHandlers(
  io: Server<ClientToServerEvents, ServerToClientEvents>,
  socket: Socket<ClientToServerEvents, ServerToClientEvents>
) {
  socket.on("join", ({ chatId }) => {
    socket.join(chatId)
  })

  socket.on("send-message", ({ chatId, message }, ack) => {
    console.log("📨 Message received:", message)

    io.to(chatId).emit("receive-message", message)
    ack?.()
  })

  socket.on("typing", ({ chatId, sender }) => {
    socket.to(chatId).emit("typing", sender)
  })

  socket.on("stop-typing", ({ chatId, sender }) => {
    socket.to(chatId).emit("stop-typing", sender)
  })

  socket.on("read", ({ chatId, messageId }) => {
    socket.to(chatId).emit("read", messageId)
  })
}
