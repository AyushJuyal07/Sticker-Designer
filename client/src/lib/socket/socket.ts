import { io, Socket } from "socket.io-client"
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@shared/chat.types"

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL!

export const createSocket = (): Socket<
  ServerToClientEvents,
  ClientToServerEvents
> => {
  return io(SOCKET_URL, {
    transports: ["websocket"],
    reconnection: true,
  })
}

