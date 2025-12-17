"use client"

import ImageUploader from "../ImageUploader"
import TextControls from "../TextControls"

// export default function Toolbar() {
//   return (
//     <aside className="w-64 bg-white border-r p-4 space-y-6">
//       <h2 className="text-lg font-semibold">Tools</h2>

//       <ImageUploader />

//       <TextControls />
//     </aside>
//   )
// }


// export default function Toolbar() {
//   return (
//     <aside className="w-72 bg-white border-r px-4 py-6 space-y-6 shadow-sm">
//       <h2 className="text-lg text-black font-semibold tracking-tight">
//         Sticker Tools
//       </h2>

//       <ImageUploader />
//       <TextControls />
//     </aside>
//   )
// }


import UndoRedoControls from "../UndoRedo/UndoRedoControls"

export default function Toolbar() {
  return (
    <aside className="w-72 bg-white border-r px-4 py-6 space-y-6 shadow-sm">
      <h2 className="text-lg font-semibold tracking-tight">
        Sticker Tools
      </h2>


      {/* Image Upload */}
      <ImageUploader />

      {/* Text Controls */}
      <TextControls />
      
      {/* Undo / Redo */}
      <UndoRedoControls />
    </aside>
  )
}


