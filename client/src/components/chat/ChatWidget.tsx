// "use client"

// import { X } from "lucide-react"

// export default function ChatWidget({
//   open,
//   onClose,
// }: {
//   open: boolean
//   onClose: () => void
// }) {
//   return (
//     <div
//       className={`
//         fixed bottom-20 right-4 z-50
//         w-[320px] max-w-[90vw]
//         bg-white
//         rounded-xl
//         shadow-2xl
//         border
//         transform transition-all duration-300 ease-out
//         ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
//       `}
//       role="dialog"
//       aria-label="Customer support chat window"
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 border-b">
//         <h3 className="text-sm font-semibold">Customer Support</h3>
//         <button onClick={onClose} aria-label="Close chat">
//           <X size={18} />
//         </button>
//       </div>

//       {/* Body placeholder */}
//       <div className="h-[360px] flex items-center justify-center text-sm text-gray-400">
//         Chat coming soon…
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { X } from "lucide-react"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
import { ChatMessage } from "./chat.types"

export default function ChatWidget({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "agent",
      text: "Hi! How can we help you today?",
      timestamp: Date.now(),
    },
  ])

  const handleSend = (text: string) => {
    const optimisticMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: Date.now(),
      status: "sending",
    }

    setMessages((prev) => [...prev, optimisticMsg])

    // 🔜 Phase 3: replace this with socket emit
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === optimisticMsg.id ? { ...m, status: "sent" } : m
        )
      )
    }, 500)
  }

  return (
    <div
      className={`
        fixed bottom-20 right-4 z-50
        w-[320px] max-w-[90vw]
        bg-white rounded-xl border shadow-2xl
        flex flex-col
        transform transition-all duration-300
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
      role="dialog"
      aria-label="Customer support chat"
    >
      {/* Header */}
      {/* <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="text-sm font-semibold">Customer Support</h3>
        <button onClick={onClose} aria-label="Close chat">
          <X size={18} />
        </button>
      </div> */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <h3 className="text-sm font-semibold text-gray-900">
            Customer Support
        </h3>
        <button
            onClick={onClose}
            aria-label="Close chat"
            className="text-gray-700 hover:text-black"
        >
            <X size={18} />
        </button>
        </div>


      {/* Messages */}
      <ChatMessages messages={messages} />

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  )
}
