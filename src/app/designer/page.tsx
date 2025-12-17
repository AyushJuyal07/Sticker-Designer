// import { DesignerProvider } from "@/stores/designer.context"
// import StickerCanvas from "@/components/designer/Canvas/StickerCanvas"
// import Toolbar from "@/components/designer/Toolbar/Toolbar"

// export default function DesignerPage() {
//   return (
//     <DesignerProvider>
//       <div className="flex min-h-screen bg-gray-100">
//         <Toolbar />
//         <main className="flex flex-1 items-center justify-center">
//           <StickerCanvas />
//         </main>
//       </div>
//     </DesignerProvider>
//   )
// }


import { DesignerProvider } from "@/stores/designer.context"
import StickerCanvas from "@/components/designer/Canvas/StickerCanvas"
import Toolbar from "@/components/designer/Toolbar/Toolbar"

export default function DesignerPage() {
  return (
    <DesignerProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <Toolbar />

        <main className="flex flex-1 items-center justify-center p-8">
          <StickerCanvas />
        </main>
      </div>
    </DesignerProvider>
  )
}

