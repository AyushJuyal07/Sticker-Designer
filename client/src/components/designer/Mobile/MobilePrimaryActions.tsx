// "use client"

// import ImageUploader from "../Image/ImageUploader"
// import AddTextButton from "../Text/AddTextButton"

// export default function MobilePrimaryActions({
//   onOpenToolbar,
// }: {
//   onOpenToolbar: () => void
// }) {
//   return (
//     <div className="md:hidden w-full flex justify-center gap-4 px-4 pb-4">
//       <div className="flex-1  max-w-[160px]">
//         <ImageUploader />
//         {/* <AddTextButton /> */}
//       </div>

//       <div className="flex-1 max-w-[160px]">
//         <AddTextButton />
//       </div>
//     </div>
//   )
// }


// "use client"

// import ImageUploader from "../Image/ImageUploader"
// import AddTextButton from "../Text/AddTextButton"

// export default function MobilePrimaryActions() {
//   return (
//     <div
//       className="
//         md:hidden
//         flex justify-center gap-3
//         px-4
//         mt-2
//         mb-16   /* IMPORTANT: creates space above Sticker Tools bar */
//       "
//     >
//       {/* Add Image */}
//       <div
//         className="
//           flex-1 max-w-[160px]
//           rounded-xl
//           bg-white
//           shadow-md
//           border
//           active:scale-95
//           transition
//         "
//       >
//         <ImageUploader />
//       </div>

//       {/* Add Text */}
//       <div
//         className="
//           flex-1 max-w-[160px]
//           rounded-xl
//           bg-white
//           shadow-md
//           border
//           active:scale-95
//           transition
//         "
//       >
//         <AddTextButton />
//       </div>
//     </div>
//   )
// }

"use client"

import { ImagePlus } from "lucide-react"
import { useRef } from "react"
import { useImageUpload } from "../Image/ImageUploader"
import AddTextButton from "../Text/AddTextButton"

export default function MobilePrimaryActions() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const { handleFile } = useImageUpload()

  return (
    <div
      className="
        md:hidden
        flex justify-center gap-3
        px-4
        mt-2
        mb-22
      "
    >
      {/* Upload Image – mobile style */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="
          flex-1 h-9
          rounded-lg
          border
          bg-white
          shadow-sm
          flex items-center justify-center gap-2
          text-sm font-medium
          active:scale-95
          transition
          text-black
        "
      >
        <ImagePlus size={16} />
        Upload Image
      </button>

      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept="image/png,image/jpeg,image/jpg,image/svg+xml"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
      />

      {/* Add Text – same size & style */}
      <div className="flex-1 h-11">
        <AddTextButton />
      </div>
    </div>
  )
}
