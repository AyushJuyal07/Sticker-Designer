// "use client"

// import { useState } from "react"
// import * as fabric from "fabric"
// import { useDesigner } from "@/stores/designer.context"

// export default function CropControls() {
//   const { canvas, selectedObject } = useDesigner()

//   const [cropRect, setCropRect] = useState<fabric.Rect | null>(null)
//   const [targetImage, setTargetImage] =
//     useState<fabric.Image | null>(null)

//   const isImageSelected =
//     selectedObject && selectedObject.type === "image"

//   /* ------------------ Start Crop ------------------ */
//   const startCrop = () => {
//     if (!canvas || !isImageSelected) return

//     const img = selectedObject as fabric.Image

//     // Store target image (IMPORTANT)
//     setTargetImage(img)

//     // Calculate top-left of image in canvas coords
//     const { left, top } = img.getBoundingRect()

//     const rect = new fabric.Rect({
//       left,
//       top,
//       width: img.getScaledWidth(),
//       height: img.getScaledHeight(),
//       fill: "rgba(0,0,0,0.15)",
//       stroke: "#000",
//       strokeDashArray: [5, 5],
//       hasRotatingPoint: false,
//       lockRotation: true,
//       transparentCorners: false,
//       cornerStyle: "circle",
//       cornerColor: "#000"
//     })

//     canvas.add(rect)
//     canvas.setActiveObject(rect)
//     setCropRect(rect)
//     canvas.requestRenderAll()
//   }

//   /* ------------------ Apply Crop ------------------ */
//   const applyCrop = () => {
//     if (!canvas || !cropRect || !targetImage) return

//     const img = targetImage

//     const imgRect = img.getBoundingRect()

//     const scaleX = img.scaleX ?? 1
//     const scaleY = img.scaleY ?? 1

//     const cropX =
//       (cropRect.left! - imgRect.left) / scaleX
//     const cropY =
//       (cropRect.top! - imgRect.top) / scaleY

//     const cropWidth =
//       cropRect.getScaledWidth() / scaleX
//     const cropHeight =
//       cropRect.getScaledHeight() / scaleY

//     img.set({
//       cropX: Math.max(0, cropX),
//       cropY: Math.max(0, cropY),
//       width: Math.min(cropWidth, img.width!),
//       height: Math.min(cropHeight, img.height!)
//     })

//     canvas.remove(cropRect)
//     setCropRect(null)
//     setTargetImage(null)

//     canvas.setActiveObject(img)
//     canvas.requestRenderAll()
//   }

//   /* ------------------ Cancel Crop ------------------ */
//   const cancelCrop = () => {
//     if (!canvas || !cropRect) return

//     canvas.remove(cropRect)
//     setCropRect(null)
//     setTargetImage(null)
//     canvas.requestRenderAll()
//   }

//   /* ------------------ UI ------------------ */
//   // if (!isImageSelected && !cropRect) return null

//   return (
//     <div className="space-y-2">
//       <h3 className="text-xs font-semibold text-black">
//         Crop Image
//       </h3>

//       {!cropRect ? (
//         <button
//           onClick={startCrop}
//           className="w-full rounded border px-3 py-2 text-sm text-gray-900"
//         >
//           Crop
//         </button>
//       ) : (
//         <div className="flex gap-2">
//           <button
//             onClick={applyCrop}
//             className="flex-1 rounded bg-green-600 px-3 py-2 text-sm text-white"
//           >
//             Apply
//           </button>

//           <button
//             onClick={cancelCrop}
//             className="flex-1 rounded border px-3 py-2 text-sm text-gray-900"
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import * as fabric from "fabric"
import { useDesigner } from "@/stores/designer.context"

export default function CropControls() {
  const {
    canvas,
    selectedObject,
    setIsCropping
  } = useDesigner()

  const [cropRect, setCropRect] =
    useState<fabric.Rect | null>(null)

  const [targetImage, setTargetImage] =
    useState<fabric.Image | null>(null)

  const isImageSelected =
    selectedObject?.type === "image"

  /* ------------------ Start Crop ------------------ */
  const startCrop = () => {
    if (!canvas || !isImageSelected) return

    const img = selectedObject as fabric.Image
    setTargetImage(img)
    setIsCropping(true)

    const { left, top } = img.getBoundingRect()

    const rect = new fabric.Rect({
      left,
      top,
      width: img.getScaledWidth(),
      height: img.getScaledHeight(),
      fill: "rgba(0,0,0,0.15)",
      stroke: "#000",
      strokeDashArray: [5, 5],
      hasRotatingPoint: false,
      lockRotation: true,
      transparentCorners: false,
      cornerStyle: "circle"
    })

    canvas.add(rect)
    canvas.setActiveObject(rect)
    setCropRect(rect)
    canvas.requestRenderAll()
  }

  /* ------------------ Apply Crop ------------------ */
  const applyCrop = () => {
    if (!canvas || !cropRect || !targetImage) return

    const img = targetImage
    const imgRect = img.getBoundingRect()

    const scaleX = img.scaleX ?? 1
    const scaleY = img.scaleY ?? 1

    const cropX =
      (cropRect.left! - imgRect.left) / scaleX
    const cropY =
      (cropRect.top! - imgRect.top) / scaleY

    const cropWidth =
      cropRect.getScaledWidth() / scaleX
    const cropHeight =
      cropRect.getScaledHeight() / scaleY

    img.set({
      cropX: Math.max(0, cropX),
      cropY: Math.max(0, cropY),
      width: Math.min(cropWidth, img.width!),
      height: Math.min(cropHeight, img.height!)
    })

    canvas.remove(cropRect)
    setCropRect(null)
    setTargetImage(null)
    setIsCropping(false)

    canvas.setActiveObject(img)
    canvas.requestRenderAll()
  }

  /* ------------------ Cancel Crop ------------------ */
  const cancelCrop = () => {
    if (!canvas || !cropRect) return

    canvas.remove(cropRect)
    setCropRect(null)
    setTargetImage(null)
    setIsCropping(false)

    canvas.requestRenderAll()
  }

  /* ------------------ UI ------------------ */
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold text-black">
        Crop Image
      </h3>

      {!cropRect ? (
        <button
          onClick={startCrop}
          className="w-full rounded border px-3 py-2 text-sm text-gray-900"
        >
          Crop
        </button>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={applyCrop}
            className="flex-1 rounded bg-green-600 px-3 py-2 text-sm text-white"
          >
            Apply
          </button>

          <button
            onClick={cancelCrop}
            className="flex-1 rounded border px-3 py-2 text-sm text-gray-900"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
