// "use client"

// import ChatWidget from "@/components/chat/ChatWidget"

// export default function AdminPanelPage() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[380px] h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-4 py-2 border-b font-semibold text-sm">
//           Admin Panel
//         </div>

//         <ChatWidget
//           chatId="demo-chat"
//           role="agent"
//           forceOpen
//         />
//       </div>
//     </div>
//   )
// }




"use client"

import ChatWidget from "@/components/chat/ChatWidget"

export default function AdminPanelPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

        <ChatWidget 
          chatId="demo-chat"
          role="agent"
          forceOpen
        />
    </div>
  )
}