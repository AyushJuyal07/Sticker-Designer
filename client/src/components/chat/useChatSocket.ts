"use client"

import { useEffect, useRef, useState } from "react"
import { createSocket } from "@/lib/socket/socket"
import { ChatMessage, ClientToServerEvents,ServerToClientEvents } from "@/types/chat.types"
import { Socket } from "socket.io-client"

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

