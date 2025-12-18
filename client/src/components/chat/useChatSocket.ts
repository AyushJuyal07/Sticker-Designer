// "use client"

// import { useEffect, useState } from "react"
// import { getSocket } from "@/lib/socket/socket"
// import { ChatMessage } from "../../../../shared/chat.types"

// export function useChatSocket(chatId: string, role: "user" | "agent") {
//   const socket = getSocket()

//   const [messages, setMessages] = useState<ChatMessage[]>([])
// //   const [typing, setTyping] = useState(false)
//   const [typing, setTyping] = useState<"user" | "agent" | null>(null)

//   useEffect(() => {
//     setMessages([
//         {
//         id: "system-1",
//         sender: "agent",
//         text: "Hi! How can we help you today?",
//         timestamp: Date.now(),
//         status: "sent",
//         },
//     ])
//     socket.emit("join", { chatId })


//     socket.on("receive-message", (msg) => {
//     setMessages(prev =>
//         prev.map(m =>
//         m.id === msg.id
//             ? { ...m, status: "sent" }
//             : m
//         )
//     )
//     })


//     socket.on("typing", sender => setTyping(sender))
//     socket.on("stop-typing", () => setTyping(null))

//     socket.on("read", (messageId: string) => {
//       setMessages(prev =>
//         prev.map(m =>
//           m.id === messageId ? { ...m, status: "read" } : m
//         )
//       )
//     })

//     return () => {
//       socket.off("receive-message")
//       socket.off("typing")
//       socket.off("stop-typing")
//       socket.off("read")
//     }
//   }, [chatId, socket])

// const sendMessage = (message: ChatMessage) => {
//   // 🔍 DEBUG: prove frontend emit is running
//   console.log("🚀 Emitting send-message", message)

//   // Optimistic UI
//   setMessages(prev => [...prev, message])

//   socket.emit(
//     "send-message",
//     { chatId, message },
//     () => {
//       console.log("✅ Server ACK received for message:", message.id)

//       setMessages(prev =>
//         prev.map(m =>
//           m.id === message.id
//             ? { ...m, status: "sent" }
//             : m
//         )
//       )
//     }
//   )
// }



// //   const sendTyping = () => socket.emit("typing", { chatId })
// //   const stopTyping = () => socket.emit("stop-typing", { chatId })

// const sendTyping = () =>
//   socket.emit("typing", { chatId, sender: role })

// const stopTyping = () =>
//   socket.emit("stop-typing", { chatId, sender: role })


//   return {
//     messages,
//     sendMessage,
//     typing,
//     sendTyping,
//     stopTyping,
//   }
// }


// "use client"

// import { useEffect, useRef, useState } from "react"
// import { createSocket } from "@/lib/socket/socket"
// import { ChatMessage } from "../../../../shared/chat.types"
// import { Socket } from "socket.io-client"
// import {
//   ClientToServerEvents,
//   ServerToClientEvents,
// } from "../../../../shared/chat.types"

// export function useChatSocket(
//   chatId: string,
//   role: "user" | "agent"
// ) {
//   const socketRef = useRef<
//     Socket<ServerToClientEvents, ClientToServerEvents> | null
//   >(null)

//   if (!socketRef.current) {
//     socketRef.current = createSocket()
//   }

//   const socket = socketRef.current

//   const [messages, setMessages] = useState<ChatMessage[]>([])
//   const [typingBy, setTypingBy] = useState<"user" | "agent" | null>(null)

//   useEffect(() => {
//     if (!socket) return

//     // ✅ join room
//     socket.emit("join", { chatId })

//     // ✅ receive message - but ONLY from other party
//     socket.on("receive-message", (message) => {
//       // 🔥 FIX: Only add messages from OTHER party (not from yourself)
//       if (message.sender !== role) {
//         setMessages(prev => [...prev, message])
//       }
//     })

//     // ✅ typing
//     socket.on("typing", (sender) => {
//       setTypingBy(sender)
//     })

//     socket.on("stop-typing", () => {
//       setTypingBy(null)
//     })

//     // ✅ read receipt
//     socket.on("read", (messageId) => {
//       setMessages(prev =>
//         prev.map(m =>
//           m.id === messageId ? { ...m, status: "read" } : m
//         )
//       )
//     })

//     return () => {
//       socket.off("receive-message")
//       socket.off("typing")
//       socket.off("stop-typing")
//       socket.off("read")
//       socket.disconnect()
//     }
//   }, [chatId, socket, role])

//   // ✅ SEND MESSAGE
//   const sendMessage = (message: ChatMessage) => {
//     // Add to local state immediately (optimistic update)
//     setMessages(prev => [...prev, message])

//     socket?.emit(
//       "send-message",
//       { chatId, message },
//       () => {
//         // ACK → sent
//         setMessages(prev =>
//           prev.map(m =>
//             m.id === message.id ? { ...m, status: "sent" } : m
//           )
//         )
//       }
//     )
//   }

//   // ✅ TYPING
//   const sendTyping = () => {
//     socket?.emit("typing", { chatId, sender: role })
//   }

//   const stopTyping = () => {
//     socket?.emit("stop-typing", { chatId, sender: role })
//   }

//   return {
//     messages,
//     sendMessage,
//     typingBy,
//     sendTyping,
//     stopTyping,
//   }
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { createSocket } from "@/lib/socket/socket"
import { ChatMessage } from "../../../../shared/chat.types"
import { Socket } from "socket.io-client"
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../../../shared/chat.types"

export function useChatSocket(
  chatId: string,
  role: "user" | "agent"
) {
  const socketRef = useRef<
    Socket<ServerToClientEvents, ClientToServerEvents> | null
  >(null)

  if (!socketRef.current) {
    socketRef.current = createSocket()
  }

  const socket = socketRef.current

//   const [messages, setMessages] = useState<ChatMessage[]>([])
    const [messages, setMessages] = useState<ChatMessage[]>(() => {
    // ✅ Initialize with welcome message for users only
    if (role === "user") {
      return [{
        id: "welcome-" + Date.now(),
        sender: "agent" as const,
        text: "Hi there! 👋 Welcome to customer support. How can we help you today?",
        timestamp: Date.now(),
        status: "read" as const,
      }]
    }
    return []
  })
  const [typingBy, setTypingBy] = useState<"user" | "agent" | null>(null)

  useEffect(() => {
    if (!socket) return

    // ✅ join room
    socket.emit("join", { chatId })
    console.log(`🔵 [${role}] Joined room: ${chatId}`)


    // ✅ receive message
    socket.on("receive-message", (message) => {
      console.log(`📨 [${role}] Received message:`, message)
      console.log(`📊 [${role}] Message sender: ${message.sender}, My role: ${role}`)
      
      // Only add messages from OTHER party
      if (message.sender !== role) {
        console.log(`✅ [${role}] Adding message to state`)
        setMessages(prev => [...prev, message])
      } else {
        console.log(`⏭️  [${role}] Skipping own message`)
      }
    })

    // ✅ typing
    socket.on("typing", (sender) => {
      setTypingBy(sender)
    })

    socket.on("stop-typing", () => {
      setTypingBy(null)
    })

    // ✅ read receipt
    socket.on("read", (messageId) => {
      setMessages(prev =>
        prev.map(m =>
          m.id === messageId ? { ...m, status: "read" } : m
        )
      )
    })

    return () => {
      socket.off("receive-message")
      socket.off("typing")
      socket.off("stop-typing")
      socket.off("read")
      socket.disconnect()
    }
  }, [chatId, socket, role])

  // ✅ SEND MESSAGE
  const sendMessage = (message: ChatMessage) => {
    console.log(`📤 [${role}] Sending message:`, message)
    
    // Add to local state immediately (optimistic update)
    setMessages(prev => [...prev, message])

    socket?.emit(
      "send-message",
      { chatId, message },
      () => {
        console.log(`✅ [${role}] Message acknowledged by server`)
        // ACK → sent
        setMessages(prev =>
          prev.map(m =>
            m.id === message.id ? { ...m, status: "sent" } : m
          )
        )
      }
    )
  }

  // ✅ TYPING
  const sendTyping = () => {
    socket?.emit("typing", { chatId, sender: role })
  }

  const stopTyping = () => {
    socket?.emit("stop-typing", { chatId, sender: role })
  }

  return {
    messages,
    sendMessage,
    typingBy,
    sendTyping,
    stopTyping,
  }
}

