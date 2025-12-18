export type ChatMessage = {
  id: string
  sender: "user" | "agent"
  text?: string
  file?: {
    name: string
    url?: string
  }
  timestamp: number
  status?: "sending" | "sent" | "error"
}
