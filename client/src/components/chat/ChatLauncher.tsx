// "use client"

// import { MessageCircle } from "lucide-react"

// export default function ChatLauncher({
//   onOpen,
//   unreadCount = 0,
// }: {
//   onOpen: () => void
//   unreadCount?: number
// }) {
//   return (
//     <button
//       onClick={onOpen}
//       aria-label="Open customer support chat"
//       className="
//         fixed bottom-4 right-4 z-50
//         h-12 w-12
//         rounded-full
//         bg-black text-white
//         flex items-center justify-center
//         shadow-lg
//         hover:scale-105
//         active:scale-95
//         transition
//       "
//     >
//       <MessageCircle size={20} />

//       {unreadCount > 0 && (
//         <span
//           className="
//             absolute -top-1 -right-1
//             h-5 w-5
//             rounded-full
//             bg-red-600 text-white
//             text-xs
//             flex items-center justify-center
//           "
//         >
//           {unreadCount}
//         </span>
//       )}
//     </button>
//   )
// }


"use client"

import { MessageCircle } from "lucide-react"

export default function ChatLauncher({
  onToggle,
  unreadCount = 0,
}: {
  onToggle: () => void
  unreadCount?: number
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle customer support chat"
      className="
        fixed bottom-4 right-4 z-50
        h-12 w-12
        rounded-full
        bg-black text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        active:scale-95
        transition
        cursor-pointer
      "
    >
      <MessageCircle size={20} />

      {unreadCount > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            h-5 w-5
            rounded-full
            bg-red-600 text-white
            text-xs
            flex items-center justify-center
          "
        >
          {unreadCount}
        </span>
      )}
    </button>
  )
}
