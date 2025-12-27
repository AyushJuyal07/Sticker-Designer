"use client"

import ChatWidget from "@/components/chat/ChatWidget"

export default function AdminPanelPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F6B1CE]">

        <ChatWidget 
          chatId="demo-chat"
          role="agent"
          forceOpen
        />
    </div>
  )
}

