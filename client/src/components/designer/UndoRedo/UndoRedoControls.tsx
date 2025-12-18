"use client"

import { useDesigner } from "@/stores/designer.context"

export default function UndoRedoControls() {
  const { undo } = useDesigner()

  return (
    <div className="flex gap-2">
      <button
        onClick={undo}
        className="
          flex-1 rounded-md border border-gray-300
          bg-white px-3 py-2 text-sm font-medium
          hover:bg-gray-100
        "
      >
        Undo
      </button>

      {/* <button
        onClick={redo}
        className="
          flex-1 rounded-md border border-gray-300
          bg-white px-3 py-2 text-sm font-medium
          hover:bg-gray-100
        "
      >
        Redo
      </button> */}
    </div>
  )
}
