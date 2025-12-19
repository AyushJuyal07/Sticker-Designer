"use client"

import { X } from "lucide-react"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
import TypingIndicator from "./TypingIndicator"
import { useChatSocket } from "./useChatSocket"
import { ChatMessage } from "@/types/chat.types"
import { v4 as uuidv4 } from "uuid"


type ChatWidgetProps = {
  open?: boolean
  onClose?: () => void
  chatId: string
  role: "user" | "agent"
  forceOpen?: boolean
}

export default function ChatWidget({
  open = false,
  onClose,
  chatId,
  role,
  forceOpen = false,
}: ChatWidgetProps) {
  const {
    messages,
    sendMessage,
    typingBy,
    sendTyping,
    stopTyping,
  } = useChatSocket(chatId, role)

  const handleSend = (text: string) => {
    const msg: ChatMessage = {
      id: uuidv4(),
      sender: role,          // ✅ USER OR AGENT
      text,
      timestamp: Date.now(),
      status: "sending",
    }

    sendMessage(msg)
  }

  const isOpen = forceOpen || open
  const isAdmin = role === "agent"

  return (

    <div
      className={`
        ${isAdmin ? "relative" : "fixed bottom-20 right-4 z-50"}
        h-[500px] w-[320px] max-w-[90vw]
        bg-white rounded-xl shadow-2xl
        flex flex-col
        transform transition-all duration-300
        ${forceOpen || open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        {/* <h3 className="text-sm font-semibold text-gray-900">
          {role === "agent" ? "Admin Panel" : "Customer Support"}
        </h3> */}
        <h3 className="text-sm font-semibold text-gray-900">
          {isAdmin ? "Admin Panel" : "Customer Support"}
        </h3>

        {!forceOpen && onClose && (
          <button
            onClick={onClose}
            aria-label="Close chat"
            className="text-gray-700 hover:text-black"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Messages */}
      <ChatMessages messages={messages} role={role}/>

      {/* {typing && <TypingIndicator />} */}
      {typingBy && typingBy !== role && <TypingIndicator />}


      {/* Input */}
      <ChatInput
        onSend={handleSend}
        onTyping={sendTyping}
        onStopTyping={stopTyping}
      />
    </div>
  )
}
