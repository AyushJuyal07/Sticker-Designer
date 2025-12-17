// "use client"

// import { useState } from "react"
// import { useDesigner } from "@/stores/designer.context"
// import { exportCircularPNG } from "@/lib/fabric/export"

// const EXPORT_SIZES = [512, 1024, 2048]

// export default function ExportButton() {
//   const { canvas } = useDesigner()

//   const [size, setSize] = useState(1024)
//   const [whiteBg, setWhiteBg] = useState(false)
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null)
//   const [isGenerating, setIsGenerating] = useState(false)

//   const generatePreview = async () => {
//     if (!canvas) return

//     setIsGenerating(true)
//     const dataUrl = await exportCircularPNG(canvas, size, whiteBg)
//     setPreviewUrl(dataUrl)
//     setIsGenerating(false)
//   }

//   const downloadImage = () => {
//     if (!previewUrl) return

//     const link = document.createElement("a")
//     link.href = previewUrl
//     link.download = `sticker-${size}${whiteBg ? "-white" : ""}.png`
//     link.click()

//     setPreviewUrl(null)
//   }

//   return (
//     <>
//       {/* Controls */}
//       <div className="space-y-3">
//         {/* Size selector */}
//         <div className="flex items-center gap-2">
//           <label className="text-xs text-gray-900 font-semibold">
//             Export Size
//           </label>

//           <select
//             value={size}
//             onChange={e => setSize(Number(e.target.value))}
//             className="flex-1 rounded-md border border-gray-300
//                     bg-white px-2 py-1 text-sm text-gray-900
//                     focus:border-black focus:outline-none"
//           >
//             {EXPORT_SIZES.map(s => (
//               <option key={s} value={s}>
//                 {s} × {s}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Background toggle */}
//         <label className="flex items-center gap-2 text-sm text-gray-900">
//           <input
//             type="checkbox"
//             checked={whiteBg}
//             onChange={e => setWhiteBg(e.target.checked)}
//           />
//           White background
//         </label>

//         <button
//           onClick={generatePreview}
//           disabled={!canvas || isGenerating}
//           className="
//             w-full rounded bg-green-600 px-3 py-2
//             text-sm font-medium text-white
//             hover:bg-green-700 disabled:opacity-50
//           "
//         >
//           {isGenerating ? "Generating..." : "Export PNG"}
//         </button>
//       </div>

//       {/* Preview Modal */}
//       {previewUrl && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="w-[320px] rounded-lg bg-white p-4">
//             <h3 className="mb-3 text-sm font-semibold">
//               Preview
//             </h3>

//             <div className="flex justify-center">
//               <img
//                 src={previewUrl}
//                 className="h-56 w-56 rounded-full border"
//               />
//             </div>

//             <div className="mt-4 flex gap-2">
//               <button
//                 onClick={() => setPreviewUrl(null)}
//                 className="flex-1 rounded border px-3 py-2 text-sm"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={downloadImage}
//                 className="flex-1 rounded bg-green-600 px-3 py-2 text-sm text-white"
//               >
//                 Download
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


"use client"

import { useState } from "react"
import { useDesigner } from "@/stores/designer.context"
import { exportCircularPNG } from "@/lib/fabric/export"
import ExportPreviewModal from "./ExportPreviewModal"

const EXPORT_SIZES = [512, 1024, 2048]

export default function ExportButton() {
  const { canvas } = useDesigner()

  const [size, setSize] = useState(1024)
  const [whiteBg, setWhiteBg] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePreview = async () => {
    if (!canvas) return

    setIsGenerating(true)
    const dataUrl = await exportCircularPNG(canvas, size, whiteBg)
    setPreviewUrl(dataUrl)
    setIsGenerating(false)
  }

  const downloadImage = () => {
    if (!previewUrl) return

    const link = document.createElement("a")
    link.href = previewUrl
    link.download = `sticker-${size}${whiteBg ? "-white" : ""}.png`
    link.click()

    setPreviewUrl(null)
  }

  return (
    <>
      <div className="space-y-3">
        {/* Size selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-black">
            Export Size
          </label>

          <select
            value={size}
            onChange={e => setSize(Number(e.target.value))}
            className="flex-1 rounded-md border border-gray-300
                    bg-white px-2 py-1 text-sm text-gray-900
                    focus:border-black focus:outline-none"
          >
            {EXPORT_SIZES.map(s => (
              <option key={s} value={s}>
                {s} × {s}
              </option>
            ))}
          </select>
        </div>

        {/* Background toggle */}
        <label className="flex items-center gap-2 text-sm text-gray-900">
          <input
            type="checkbox"
            checked={whiteBg}
            onChange={e => setWhiteBg(e.target.checked)}
          />
          White background
        </label>

        <button
          onClick={generatePreview}
          disabled={!canvas || isGenerating}
          className="
            w-full rounded bg-green-600 px-3 py-2
            text-sm font-medium text-white
            hover:bg-green-700 disabled:opacity-50
          "
        >
          {isGenerating ? "Generating..." : "Export PNG"}
        </button>
      </div>

      {previewUrl && (
        <ExportPreviewModal
          imageUrl={previewUrl}
          onCancel={() => setPreviewUrl(null)}
          onConfirm={downloadImage}
        />
      )}
    </>
  )
}
