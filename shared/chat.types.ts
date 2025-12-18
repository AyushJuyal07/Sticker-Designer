


// export type ChatMessage = {
//   id: string
//   sender: "user" | "agent"
//   text?: string
//   timestamp: number
// }

// export type ServerToClientEvents = {
//   "receive-message": (message: ChatMessage) => void
//   typing: () => void
//   "stop-typing": () => void
//   read: (messageId: string) => void
// }



// export type ClientToServerEvents = {
//   "send-message": (
//     data: {
//       chatId: string
//       message: ChatMessage
//     },
//     ack: () => void
//   ) => void
  
//   join: (data: { chatId: string }) => void
//   typing: (data: { chatId: string }) => void
//   "stop-typing": (data: { chatId: string }) => void
//   read: (data: { chatId: string; messageId: string }) => void
// }


// export type ClientToServerEvents = {
//   join: (data: { chatId: string }) => void
//   "send-message": (data: { chatId: string; message: ChatMessage }) => void
//   typing: (data: { chatId: string }) => void
//   "stop-typing": (data: { chatId: string }) => void
//   read: (data: { chatId: string; messageId: string }) => void
// }



export type MessageStatus = "sending" | "sent" | "read" | "error"

export type ChatFile = {
  name: string
  size: number
  type: string
  url?: string // later when uploaded
}

export type ChatMessage = {
  id: string
  sender: "user" | "agent"
  text?: string
  file?: ChatFile
  timestamp: number
  status: MessageStatus
}

export type TypingPayload = {
  chatId: string
  sender: "user" | "agent"
}



// export type ServerToClientEvents = {
//   "receive-message": (message: ChatMessage) => void
//   typing: () => void
//   "stop-typing": () => void
//   read: (messageId: string) => void
// }

// export type ServerToClientEvents = {
//   "receive-message": (message: ChatMessage) => void
//   typing: (sender: "user" | "agent") => void
//   "stop-typing": (sender: "user" | "agent") => void
//   read: (messageId: string) => void
// }

export type ServerToClientEvents = {
  "receive-message": (message: ChatMessage) => void
  typing: (sender: "user" | "agent") => void
  "stop-typing": (sender: "user" | "agent") => void
  read: (messageId: string) => void
}



export type ClientToServerEvents = {
  "send-message": (
    data: { chatId: string; message: ChatMessage },
    ack: () => void
  ) => void

  join: (data: { chatId: string }) => void
  typing: (data: TypingPayload) => void
  "stop-typing": (data: TypingPayload) => void
  read: (data: { chatId: string; messageId: string }) => void
}



// export type ClientToServerEvents = {
//   "send-message": (
//     data: {
//       chatId: string
//       message: ChatMessage
//     },
//     ack: () => void
//   ) => void

//   join: (data: { chatId: string }) => void
//   typing: (data: { chatId: string }) => void
//   "stop-typing": (data: { chatId: string }) => void
//   read: (data: { chatId: string; messageId: string }) => void
// }
