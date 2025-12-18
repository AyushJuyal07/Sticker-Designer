"use client"

import { useDesigner } from "@/stores/designer.context"
import {
  saveCanvasDraft,
  clearCanvasDraft
} from "@/lib/fabric/drafts"
import { toast } from "sonner"
import { Save, RotateCcw } from "lucide-react"



export default function DraftControls({ iconOnly = false }: { iconOnly?: boolean }) {
  const { canvas } = useDesigner()

  if (!canvas) return null

  const saveDraft = () => {
    saveCanvasDraft(canvas)
    toast.success("Draft saved")

  }

  const clearDraft = () => {
    clearCanvasDraft()
    toast.info("Draft cleared")

  }

  return (
  <div className="flex items-center gap-2">
    {iconOnly ? (
      <>
        {/* Save Draft */}
        <button
          onClick={saveDraft}
          title="Save Draft"
          className="
            h-8 w-8
            flex items-center justify-center
            rounded-md border border-gray-300
            text-gray-700
            hover:bg-black hover:text-white
            transition-all duration-150
          "
        >
          <Save size={16} />
        </button>

        {/* Clear Draft */}
        <button
          onClick={clearDraft}
          title="Clear Draft"
          className="
            h-8 w-8
            flex items-center justify-center
            rounded-md border border-gray-300
            text-gray-700
            hover:bg-black hover:text-white
            transition-all duration-150
          "
        >
          <RotateCcw size={16} />
        </button>
      </>
    ) : (
      <>
        <button
          onClick={saveDraft}
          className="
            rounded border border-gray-300
            px-2 py-1 text-xs
            bg-transparent text-black
            hover:bg-black hover:text-white
            active:translate-y-[1px]
            transition-all duration-150 ease-out
          "
        >
          Save Draft
        </button>

        <button
          onClick={clearDraft}
          className="
            rounded border border-gray-300
            px-2 py-1 text-xs
            bg-transparent text-black
            hover:bg-black hover:text-white
            active:translate-y-[1px]
            transition-all duration-150 ease-out
          "
        >
          Clear Draft
        </button>
      </>
    )}
  </div>
)

}
