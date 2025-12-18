"use client"

import * as fabric from "fabric"
import { useDesigner } from "@/stores/designer.context"

export default function AddTextButton() {
  const { canvas } = useDesigner()

  const addText = () => {
    if (!canvas) return

    const textbox = new fabric.Textbox("Text", {
      left: canvas.width! / 2,
      top: canvas.height! / 2,
      originX: "center",
      originY: "center",
      fontSize: 24,
      fill: "#000000",
      editable: true
    })

    canvas.add(textbox)
    canvas.setActiveObject(textbox)
    canvas.requestRenderAll()
  }

  return (
    <button
      onClick={addText}
      className="
        w-full rounded bg-black px-3 py-2
        text-sm text-white hover:bg-white hover:text-black cursor-pointer border active:scale-95 transition
      "
    >
      Add Text
    </button>
  )
}
