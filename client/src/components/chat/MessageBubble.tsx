"use client"

import { ChatMessage } from "./chat.types"
import { Check, AlertCircle } from "lucide-react"

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.sender === "user"

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      aria-live="polite"
    >
      <div
        className={`
          max-w-[75%] px-3 py-2 rounded-lg text-sm
          ${isUser ? "bg-black text-white" : "bg-gray-100 text-gray-900"}
        `}
      >
        {message.text && <p>{message.text}</p>}

        {message.file && (
          <p className="underline text-xs mt-1">{message.file.name}</p>
        )}

        {/* <div className="flex items-center justify-end gap-1 mt-1 text-[10px] opacity-70"> */}
        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-300">
          <span>
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>

          {isUser && message.status === "sending" && <span>…</span>}
          {isUser && message.status === "sent" && <Check size={10} />}
          {isUser && message.status === "error" && (
            <AlertCircle size={10} />
          )}
        </div>
      </div>
    </div>
  )
}
