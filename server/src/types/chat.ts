export type ChatMessage = {
  id: string
  sender: "user" | "agent"
  text?: string
  timestamp: number
}

export type ServerToClientEvents = {
  "receive-message": (message: ChatMessage) => void
  typing: () => void
  "stop-typing": () => void
  read: (messageId: string) => void
}

export type ClientToServerEvents = {
  join: (data: { chatId: string }) => void
  "send-message": (data: { chatId: string; message: ChatMessage }) => void
  typing: (data: { chatId: string }) => void
  "stop-typing": (data: { chatId: string }) => void
  read: (data: { chatId: string; messageId: string }) => void
}
