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