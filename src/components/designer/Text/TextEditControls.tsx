"use client"

import { useEffect, useState } from "react"
import * as fabric from "fabric"
import { useDesigner } from "@/stores/designer.context"

const FONTS = [
  "Arial",
  "Inter",
  "Poppins",
  "Roboto",
  "Times New Roman",
  "Courier New"
]

export default function TextEditControls() {
  const { canvas, selectedObject } = useDesigner()

  const [text, setText] = useState("")
  const [fontSize, setFontSize] = useState(24)
  const [color, setColor] = useState("#000000")
  const [fontFamily, setFontFamily] = useState("Arial")

  const isText =
    selectedObject && selectedObject.type === "textbox"

  useEffect(() => {
    if (!isText) return

    const obj = selectedObject as fabric.Textbox

    const actualFontSize =
      (obj.fontSize || 24) * (obj.scaleY || 1)

    obj.set({
      scaleX: 1,
      scaleY: 1,
      fontSize: actualFontSize
    })

    setText(obj.text || "")
    setFontSize(Math.round(actualFontSize))
    setColor((obj.fill as string) || "#000000")
    setFontFamily(obj.fontFamily || "Arial")

    canvas?.requestRenderAll()
  }, [selectedObject])

  const updateText = (value: string) => {
    if (!isText || !canvas) return
    const obj = selectedObject as fabric.Textbox
    obj.set("text", value)
    canvas.requestRenderAll()
    setText(value)
  }

  const updateFontSize = (value: number) => {
    if (!isText || !canvas) return
    const obj = selectedObject as fabric.Textbox

    obj.set({
      fontSize: value,
      scaleX: 1,
      scaleY: 1,
      width: obj.calcTextWidth() + 10
    })

    obj.initDimensions()
    canvas.requestRenderAll()
    setFontSize(value)
  }

  const updateColor = (value: string) => {
    if (!isText || !canvas) return
    const obj = selectedObject as fabric.Textbox
    obj.set("fill", value)
    canvas.requestRenderAll()
    setColor(value)
  }

  const updateFontFamily = (value: string) => {
    if (!isText || !canvas) return
    const obj = selectedObject as fabric.Textbox
    obj.set("fontFamily", value)
    obj.initDimensions()
    canvas.requestRenderAll()
    setFontFamily(value)
  }

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={text}
        onChange={e => updateText(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm text-black"
      />

      <div className="flex items-center gap-2">
        <label className="text-xs font-semibold text-black">Size</label>
        <input
          type="range"
          min={10}
          max={80}
          value={fontSize}
          onChange={e =>
            updateFontSize(Number(e.target.value))
          }
          className="flex-1 accent-black"
        />
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs font-semibold text-black">Font</label>
        <select
          value={fontFamily}
          onChange={e =>
            updateFontFamily(e.target.value)
          }
          className="flex-1 rounded border px-2 py-1 text-sm text-black"
        >
          {FONTS.map(font => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs font-semibold text-black">Color</label>
        <input
          type="color"
          value={color}
          onChange={e => updateColor(e.target.value)}
          className="h-8 w-10 rounded border"
        />
      </div>
    </div>
  )
}
