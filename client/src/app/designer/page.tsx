"use client";

import { useState } from "react";
import { DesignerProvider } from "@/stores/designer.context";
import StickerCanvas from "@/components/designer/Canvas/StickerCanvas";
import Toolbar from "@/components/designer/Toolbar/Toolbar";
import TopNavbar from "@/components/designer/TopNavbar/TopNavbar";
import MobilePrimaryActions from "@/components/designer/Mobile/MobilePrimaryActions";
import MobileBottomToolbar from "@/components/designer/Mobile/MobileBottomToolbar";
import ChatLauncher from "@/components/chat/ChatLauncher";
import ChatWidget from "@/components/chat/ChatWidget";
import ProceedButton from "@/components/designer/ProceedButton";
import CartButton from "@/components/cart/CartButton";

export default function DesignerPage() {
  const [toolbarOpen, setToolbarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <DesignerProvider>
      {/* <div className="flex h-screen overflow-hidden bg-[#FFEFEF]"> */}


      <div
        className="flex h-screen overflow-hidden"
        style={{
          backgroundColor: "#FFEFEF",
          backgroundImage: `
      radial-gradient(#ff3b3b 1.8px, transparent 1.8px),
      radial-gradient(#ff3b3b 1.8px, transparent 1.8px)
    `,
          backgroundSize: "128px 128px",
          backgroundPosition: "0 0, 64px 64px",
        }}
      >
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:block">
          <Toolbar />
        </aside>

        <main className="flex flex-1 px-4 relative overflow-hidden">
          <div className="flex flex-col w-full h-full">
            {/* Top navbar */}
            <div className="flex justify-center pt-4">
              <TopNavbar />
            </div>

            <div className="absolute right-4 top-4">
              <CartButton />
            </div>

            {/* Canvas */}
            <div
              className="
                flex flex-1 items-center justify-center
                -translate-y-6 sm:translate-y-0
              "
            >
              <StickerCanvas />
            </div>

            {/* Mobile primary actions */}
            <MobilePrimaryActions />
          </div>
        </main>

        {/* Mobile slide-up toolbar */}
        <MobileBottomToolbar
          open={toolbarOpen}
          onOpen={() => setToolbarOpen(true)}
          onClose={() => setToolbarOpen(false)}
        />
      </div>
      {/* ✅ CHAT WIDGET (FLOATING, GLOBAL) */}
      <ChatLauncher onToggle={() => setChatOpen((prev) => !prev)} />
      <ChatWidget
        chatId="demo-chat"
        role="user"
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </DesignerProvider>
  );
}
