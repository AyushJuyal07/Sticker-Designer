// "use client"

// import { ChatMessage } from "../../../../shared/chat.types"
// import MessageBubble from "./MessageBubble"
// import { useEffect, useRef } from "react"

// export default function ChatMessages({ messages }: { messages: ChatMessage[] }) {
//   const bottomRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   return (
//     <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
//       {messages.map((msg) => (
//         <MessageBubble key={msg.id} message={msg} />
//       ))}
//       <div ref={bottomRef} />
//     </div>
//   )
// }

"use client"

import { ChatMessage } from "../../../../shared/chat.types"
import MessageBubble from "./MessageBubble"
import { useEffect, useRef } from "react"

type Props = {
  messages: ChatMessage[]
  role: "user" | "agent"
}

export default function ChatMessages({ messages, role }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          role={role}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}

