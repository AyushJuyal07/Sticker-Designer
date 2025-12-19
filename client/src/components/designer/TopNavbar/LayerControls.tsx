"use client"

import { useDesigner } from "@/stores/designer.context"
import { ArrowDown, ArrowUp } from "lucide-react"


export default function LayerControls({ iconOnly = false }: { iconOnly?: boolean }) {
  const { canvas, selectedObject } = useDesigner()

  const isDisabled = !canvas || !selectedObject

  const bringForward = () => {
    if (!canvas || !selectedObject) return

    const objects = (canvas as any)._objects
    const index = objects.indexOf(selectedObject)
    if (index === -1 || index === objects.length - 1) return

    objects.splice(index, 1)
    objects.splice(index + 1, 0, selectedObject)
    canvas.requestRenderAll()
  }

  const sendBackward = () => {
    if (!canvas || !selectedObject) return

    const objects = (canvas as any)._objects
    const index = objects.indexOf(selectedObject)
    if (index <= 0) return

    objects.splice(index, 1)
    objects.splice(index - 1, 0, selectedObject)
    canvas.requestRenderAll()
  }

  return (
  <div className="flex items-center gap-2">
    {iconOnly ? (
      <>
        {/* Send Backward */}
        <button
          onClick={sendBackward}
          disabled={isDisabled}
          title="Send Backward"
          className={`
            h-8 w-8 flex items-center justify-center rounded-md border
            transition-all duration-150
            ${
              isDisabled
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-black hover:text-white active:translate-y-[1px]"
            }
          `}
        >
          <ArrowDown size={16} />
        </button>

        {/* Bring Forward */}
        <button
          onClick={bringForward}
          disabled={isDisabled}
          title="Bring Forward"
          className={`
            h-8 w-8 flex items-center justify-center rounded-md border
            transition-all duration-150
            ${
              isDisabled
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-black hover:text-white active:translate-y-[1px]"
            }
          `}
        >
          <ArrowUp size={16} />
        </button>
      </>
    ) : (
      <>
        <button
          onClick={sendBackward}
          disabled={isDisabled}
          className={`
            rounded border px-3 py-1 text-xs
            transition-all duration-150 ease-out
            ${
              isDisabled
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-black hover:bg-black hover:text-white active:translate-y-[1px]"
            }
          `}
        >
          Send Backward
        </button>

        <button
          onClick={bringForward}
          disabled={isDisabled}
          className={`
            rounded border px-3 py-1 text-xs
            transition-all duration-150 ease-out
            ${
              isDisabled
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-black hover:bg-black hover:text-white active:translate-y-[1px]"
            }
          `}
        >
          Bring Forward
        </button>
      </>
    )}
  </div>
)

}
