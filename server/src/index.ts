import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import chatHandlers from "./socket/chat.handlers";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "./types/chat.types";

dotenv.config();

const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  })
);

const server = http.createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: CLIENT_ORIGIN,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  chatHandlers(io, socket);
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});
