# 🔌 Sticker Designer – Socket.IO Backend

This directory contains the **real-time backend service** for the Sticker Designer platform.  
It powers the **customer support chat system** using **Socket.IO**, with fully **type-safe client–server communication**.

---

## 🧠 Responsibilities

- Real-time messaging between User and Agent
- Typing indicators
- Read receipts
- Chat room (chatId-based) management
- Type-safe Socket.IO events using shared TypeScript definitions
- CORS-safe communication with Next.js frontend

---

## 📂 Folder Structure

server/
├── src/
│ ├── socket/
│ │ └── chat.handlers.ts # Socket event handlers
│ ├── types/
│ │ ├── chat.types.ts # Shared socket event & message types
│ │ └── index.ts
│ └── index.ts # Server entry point
│
├── dist/ # Compiled output
├── .env # Environment variables
├── package.json
├── tsconfig.json
└── README.md

---

## 🚀 Quick Start

```bash
npm install
```

Create `.env`:
```env
PORT=4000
CLIENT_ORIGIN=http://localhost:3000
```

Run:
```bash
npm run dev
```

## 📡 Socket Events

### Client → Server

| Event | Payload | Description |
|-------|---------|-------------|
| `join` | `{ chatId: string }` | Join a chat room |
| `send-message` | `{ chatId: string, message: ChatMessage }` | Send a message |
| `typing` | `{ chatId: string, sender: "user" \| "agent" }` | Start typing indicator |
| `stop-typing` | `{ chatId: string, sender: "user" \| "agent" }` | Stop typing indicator |
| `read` | `{ chatId: string, messageId: string }` | Mark message as read |

### Server → Client

| Event | Payload | Description |
|-------|---------|-------------|
| `receive-message` | `ChatMessage` | Receive a new message |
| `typing` | `"user" \| "agent"` | Someone is typing |
| `stop-typing` | `"user" \| "agent"` | Someone stopped typing |
| `read` | `string` (messageId) | Message was read |

## 📋 Types

### ChatMessage
```typescript
{
  id: string                           // Unique message ID
  sender: "user" | "agent"             // Sender type
  text?: string                        // Message text
  file?: ChatFile                      // Optional file attachment
  timestamp: number                    // Unix timestamp (ms)
  status: "sending" | "sent" | "read" | "error"
}
```

### ChatFile
```typescript
{
  name: string      // File name
  size: number      // Size in bytes
  type: string      // MIME type
  url?: string      // File URL
}
```

## 🔌 Example Usage

```javascript
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

// Join room
socket.emit("join", { chatId: "room-123" });

// Send message
socket.emit("send-message", {
  chatId: "room-123",
  message: {
    id: crypto.randomUUID(),
    sender: "user",
    text: "Hello!",
    timestamp: Date.now(),
    status: "sending"
  }
}, () => console.log("Sent!"));

// Receive messages
socket.on("receive-message", (message) => {
  console.log("New message:", message);
});

// Typing indicators
socket.emit("typing", { chatId: "room-123", sender: "user" });
socket.on("typing", (sender) => console.log(`${sender} is typing...`));
```

## 🛠️ Tech Stack

- Express
- Socket.IO
- TypeScript
- CORS

## 📝 Notes

- Messages are broadcast to all users in the same room
- No message persistence (add database for storage)
- Typing indicators exclude sender
- Handle file uploads separately via REST API

## 🔒 Security TODO

- Add authentication middleware
- Implement rate limiting
- Validate all inputs
- Configure CORS for production