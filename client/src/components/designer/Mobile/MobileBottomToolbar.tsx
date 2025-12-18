// "use client"

// import { X } from "lucide-react"
// import Toolbar from "../Toolbar/Toolbar"

// export default function MobileBottomToolbar({
//   open,
//   onClose,
// }: {
//   open: boolean
//   onClose: () => void
// }) {
//   return (
//     <>
//       {/* Backdrop */}
//       {open && (
//         <div
//           onClick={onClose}
//           className="fixed inset-0 bg-black/30 z-40 md:hidden"
//         />
//       )}

//       {/* Slide-up panel */}
//       <div
//         className={`
//           fixed bottom-0 left-0 right-0 z-50
//           bg-white
//           rounded-t-2xl
//           shadow-2xl
//           transform transition-transform duration-300 ease-out
//           md:hidden
//           ${open ? "translate-y-0" : "translate-y-full"}
//         `}
//         style={{ height: "75vh" }}
//       >
//         {/* Drag handle */}
//         <div className="flex justify-center py-2">
//           <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
//         </div>

//         {/* Header */}
//         <div className="flex items-center justify-between px-4 pb-2 border-b">
//           <h3 className="text-sm font-semibold">Tools</h3>
//           <button onClick={onClose}>
//             <X size={18} />
//           </button>
//         </div>

//         {/* Tools */}
//         <div className="overflow-y-auto h-full px-2 pb-6">
//           <Toolbar />
//         </div>

//       </div>
//     </>
//   )
// }


"use client"

import { ChevronUp, Sparkles, X } from "lucide-react"
import Toolbar from "../Toolbar/Toolbar"

export default function MobileBottomToolbar({
  open,
  onOpen,
  onClose,
}: {
  open: boolean
  onOpen: () => void
  onClose: () => void
}) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Collapsed bottom bar (VISIBLE WHEN CLOSED) */}
      {/* {!open && (
        <div
          onClick={onOpen}
          className="
            fixed bottom-0 left-0 right-0 z-50
            md:hidden
            rounded-3xl 
          bg-white 
            shadow-sm
            border-t
            h-12
            flex items-center justify-center
            gap-2
            text-sm font-semibold
            cursor-pointer
            text-gray-900
          "
        >
          Sticker Tools
          <ChevronUp size={16} />
        </div>
      )} */}
      {/* Floating Sticker Tools button (mobile only) */}
      {!open && (
        <div
          className="
            fixed bottom-4 left-1/2 -translate-x-1/2 z-50
            md:hidden
          "
        >
          <button
            onClick={onOpen}
            className="
              h-12 px-4
              w-[280px]
              flex items-center justify-center gap-2
              rounded-xl
              bg-white
              text-black
              
              shadow-sm
              text-sm font-semibold
              active:scale-95
              transition
            "
          >
            Sticker Tools
            <ChevronUp size={16} />
          </button>
        </div>
      )}


      {/* Slide-up panel */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50
          md:hidden
          bg-white
          rounded-t-2xl
          shadow-2xl
          transform transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
        style={{ height: "75vh" }}
      >
        {/* Drag handle */}
        <div
          onClick={onClose}
          className="flex justify-center py-2 cursor-pointer"
        >
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pb-2 border-b">
          {/* <h3 className="text-sm font-semibold">Sticker Tools</h3> */}
          <button className="text-black" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Tools */}
        <div className="overflow-y-auto h-full px-2 pb-6">
          <Toolbar />
        </div>
      </div>
    </>
  )
}
