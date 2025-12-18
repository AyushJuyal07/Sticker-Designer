"use client"

import { useEffect, useState } from "react"
import { useDesigner } from "@/stores/designer.context"

export default function CanvasControls() {
  const { canvas } = useDesigner()
  const [bgColor, setBgColor] = useState("#ffffff")

  // Sync initial canvas background
  useEffect(() => {
    if (!canvas) return

    const current =
      (canvas.backgroundColor as string) || "#ffffff"

    setBgColor(current)
  }, [canvas])

  const updateBackground = (color: string) => {
    if (!canvas) return

    canvas.backgroundColor = color
    canvas.renderAll()
    setBgColor(color)
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className="text-xs font-semibold text-black">
          Background
        </label>

        <input
          type="color"
          value={bgColor}
          onChange={e => updateBackground(e.target.value)}
          className="
            h-8 w-10 cursor-pointer rounded
            border border-gray-300
          "
        />
      </div>
    </div>
  )
}
