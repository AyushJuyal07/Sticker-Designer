// "use client"

// import { useDesigner } from "@/stores/designer.context"

// export function DeleteControls() {
//   const { canvas, selectedObject, setSelectedObject } = useDesigner()

//   if (!canvas || !selectedObject) return null

//   const deleteObject = () => {
//     canvas.remove(selectedObject)
//     canvas.discardActiveObject()
//     setSelectedObject(null)
//     canvas.requestRenderAll()
//   }

//   return (
//     <div className="space-y-2">
//       {/* <h3 className="text-xs font-semibold text-black">
//         Delete
//       </h3> */}

//       <button
//         onClick={deleteObject}
//         className="
//         rounded
//                     border border-gray-300
//                     px-2 py-1 text-xs
//                     bg-transparent text-black
//                     cursor-pointer
//                     hover:bg-black hover:text-red-600
//                     active:translate-y-[1px]
//                     transition-all duration-150 ease-out
//         "
//       >
//         Delete
//       </button>
//     </div>
//   )
// }


"use client"

import { Trash2 } from "lucide-react"
import { useDesigner } from "@/stores/designer.context"
import { toast } from "sonner"

export function DeleteControls() {
  const { canvas, selectedObject, setSelectedObject } = useDesigner()

  const isDisabled = !canvas || !selectedObject

  const deleteObject = () => {
    if (!canvas || !selectedObject) return

    canvas.remove(selectedObject)
    canvas.discardActiveObject()
    setSelectedObject(null)
    canvas.requestRenderAll()
    toast.success("Element deleted")
  }

  return (
    <button
      onClick={deleteObject}
      disabled={isDisabled}
      title="Delete selected"
      className={`
        h-8 w-8 flex items-center justify-center rounded-md border
        transition-all duration-150
        ${
          isDisabled
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-red-50 hover:text-red-600 active:translate-y-[1px]"
        }
      `}
    >
      <Trash2 size={16} />
    </button>
  )
}

