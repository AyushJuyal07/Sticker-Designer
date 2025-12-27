// "use client"

// import { ChatMessage } from "@/types/chat.types"
// import { Check, AlertCircle, CheckCheck } from "lucide-react"

// type Props = {
//   message: ChatMessage
//   role: "user" | "agent"
// }

// export default function MessageBubble({ message, role }: Props) {
//   const isMine = message.sender === role

//   return (
//     <div
//       className={`flex ${isMine ? "justify-end" : "justify-start"}`}
//       aria-live="polite"
//     >
//       <div
//         className={`
//           max-w-[75%] px-3 py-2 rounded-lg text-sm
//           ${isMine ? "bg-black text-white" : "bg-gray-100 text-gray-900"}
//         `}
//       >
//         {message.text && <p>{message.text}</p>}

//         {/* Timestamp + status */}
//         <div
//           className={`
//             flex items-center gap-1 mt-1 text-[10px]
//             ${isMine ? "justify-end text-gray-300" : "justify-start text-gray-400"}
//           `}
//         >
//           <span>
//             {new Date(message.timestamp).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             })}
//           </span>

//           {/* Status icons only for sender */}
//           {isMine && message.status === "sending" && <span>…</span>}
//           {isMine && message.status === "sent" && <Check size={10} />}
//           {isMine && message.status === "read" && <CheckCheck size={10} />}
//           {isMine && message.status === "error" && (
//             <AlertCircle size={10} />
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { Check, AlertCircle, CheckCheck } from "lucide-react"
import { ChatMessage } from "@/types/chat.types"

type Props = {
  message: ChatMessage
  role: "user" | "agent"
}

export default function MessageBubble({ message, role }: Props) {
  const isMine = message.sender === role

  // ✅ Prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={`flex ${isMine ? "justify-end" : "justify-start"}`}
      aria-live="polite"
    >
      <div
        className={`
          max-w-[75%] px-3 py-2 rounded-lg text-sm
          ${isMine ? "bg-black text-white" : "bg-gray-100 text-gray-900"}
        `}
      >
        {/* Message text */}
        {message.text && <p>{message.text}</p>}

        {/* Timestamp + status */}
        <div
          className={`
            flex items-center gap-1 mt-1 text-[10px]
            ${isMine ? "justify-end text-gray-300" : "justify-start text-gray-400"}
          `}
        >
          {/* ✅ Render time ONLY after client hydration */}
          <span>
            {mounted &&
              new Date(message.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
          </span>

          {/* Status icons (sender only) */}
          {isMine && message.status === "sending" && <span>…</span>}
          {isMine && message.status === "sent" && <Check size={10} />}
          {isMine && message.status === "read" && <CheckCheck size={10} />}
          {isMine && message.status === "error" && (
            <AlertCircle size={10} />
          )}
        </div>
      </div>
    </div>
  )
}
