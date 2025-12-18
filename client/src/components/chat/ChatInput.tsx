"use client"

import { useState } from "react"
import { Smile, Paperclip, Send } from "lucide-react"

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void
}) {
  const [text, setText] = useState("")

  const send = () => {
    if (!text.trim()) return
    onSend(text)
    setText("")
  }

//   return (
//     <div className="border-t px-2 py-2 flex items-center gap-2">
//       <button aria-label="Add emoji">
//         <Smile size={18} />
//       </button>

//       <button aria-label="Attach file">
//         <Paperclip size={18} />
//       </button>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && send()}
//         placeholder="Type a message…"
//         className="flex-1 text-sm px-2 py-1 outline-none"
//         aria-label="Message input"
//       />

//       <button onClick={send} aria-label="Send message">
//         <Send size={18} />
//       </button>
//     </div>
//   )

return (
  <div className="border-t border-gray-200 px-2 py-2 flex items-center gap-2 bg-white">
    <button
      aria-label="Add emoji"
      className="text-gray-600 hover:text-black"
    >
      <Smile size={18} />
    </button>

    <button
      aria-label="Attach file"
      className="text-gray-600 hover:text-black"
    >
      <Paperclip size={18} />
    </button>

    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && send()}
      placeholder="Type a message…"
      className="
        flex-1 text-sm px-2 py-1
        outline-none
        text-gray-900
        placeholder:text-gray-400
        bg-transparent
      "
      aria-label="Message input"
    />

    <button
      onClick={send}
      aria-label="Send message"
      className="text-gray-700 hover:text-black"
    >
      <Send size={18} />
    </button>
  </div>
)

}
