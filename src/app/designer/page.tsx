// // import { DesignerProvider } from "@/stores/designer.context"
// // import StickerCanvas from "@/components/designer/Canvas/StickerCanvas"
// // import Toolbar from "@/components/designer/Toolbar/Toolbar"

// // export default function DesignerPage() {
// //   return (
// //     <DesignerProvider>
// //       <div className="flex min-h-screen bg-gray-100">
// //         <Toolbar />
// //         <main className="flex flex-1 items-center justify-center">
// //           <StickerCanvas />
// //         </main>
// //       </div>
// //     </DesignerProvider>
// //   )
// // }


// // import { DesignerProvider } from "@/stores/designer.context"
// // import StickerCanvas from "@/components/designer/Canvas/StickerCanvas"
// // import Toolbar from "@/components/designer/Toolbar/Toolbar"

// // export default function DesignerPage() {
// //   return (
// //     <DesignerProvider>
// //       <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
// //         <Toolbar />

// //         <main className="flex flex-1 items-center justify-center p-8">
// //           <StickerCanvas />
// //         </main>
// //       </div>
// //     </DesignerProvider>
// //   )
// // }

// import { DesignerProvider } from "@/stores/designer.context"
// import StickerCanvas from "@/components/designer/Canvas/StickerCanvas"
// import Toolbar from "@/components/designer/Toolbar/Toolbar"
// import TopNavbar from "@/components/designer/TopNavbar/TopNavbar"

// export default function DesignerPage() {
//   return (
//     <DesignerProvider>
//       {/* <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"> */}
//       <div className="flex h-screen overflow-hidden bg-[#FFEFEF]">
        
//         {/* Left Sidebar */}
//         <Toolbar />

//         {/* Canvas Area */}
//         <main className="flex flex-1 justify-center p-8">
//           <div className="flex flex-col items-center">
//             <TopNavbar />
//             <StickerCanvas />
//           </div>
//         </main>

//       </div>
//     </DesignerProvider>
//   )
// }


// import { DesignerProvider } from "@/stores/designer.context"
// import StickerCanvas from "@/components/designer/Canvas/StickerCanvas"
// import Toolbar from "@/components/designer/Toolbar/Toolbar"
// import TopNavbar from "@/components/designer/TopNavbar/TopNavbar"

// export default function DesignerPage() {
//   return (
//     <DesignerProvider>
//       <div className="flex h-screen overflow-hidden bg-[#FFEFEF]">

//         {/* Sidebar (hidden on mobile) */}
//         <aside className="hidden md:block">
//           <Toolbar />
//         </aside>

//         <main className="flex flex-1 px-4 relative overflow-y-auto">
//           <div className="flex flex-col w-full">

//             {/* Top bar – stays at top */}
//             <div className="flex justify-center pt-4">
//               <TopNavbar />
//             </div>

//             {/* Canvas – centered in remaining space */}
//             <div className="flex flex-1 items-center justify-center
//                             -translate-y-15
//                             sm:translate-y-0">
//               <StickerCanvas />
//             </div>

//           </div>
//         </main>

//       </div>
//     </DesignerProvider>
//   )
// }


"use client"

import { useState } from "react"
import { DesignerProvider } from "@/stores/designer.context"
import StickerCanvas from "@/components/designer/Canvas/StickerCanvas"
import Toolbar from "@/components/designer/Toolbar/Toolbar"
import TopNavbar from "@/components/designer/TopNavbar/TopNavbar"
import MobilePrimaryActions from "@/components/designer/Mobile/MobilePrimaryActions"
import MobileBottomToolbar from "@/components/designer/Mobile/MobileBottomToolbar"

export default function DesignerPage() {
  const [toolbarOpen, setToolbarOpen] = useState(false)

  return (
    <DesignerProvider>
      <div className="flex h-screen overflow-hidden bg-[#FFEFEF]">

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
            <MobilePrimaryActions
              onOpenToolbar={() => setToolbarOpen(true)}
            />

          </div>
        </main>

        {/* Mobile slide-up toolbar */}
        <MobileBottomToolbar
          open={toolbarOpen}
          onOpen={() => setToolbarOpen(true)}
          onClose={() => setToolbarOpen(false)}
        />

      </div>
    </DesignerProvider>
  )
}

