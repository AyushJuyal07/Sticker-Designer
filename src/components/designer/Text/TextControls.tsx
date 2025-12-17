"use client"

import { useEffect, useState } from "react"
import * as fabric from "fabric"
import { useDesigner } from "@/stores/designer.context"

export default function TextControls() {
  const { canvas, selectedObject } = useDesigner()

  const [text, setText] = useState("")
  const [fontSize, setFontSize] = useState(24)
  const [color, setColor] = useState("#000000")
  const [fontFamily, setFontFamily] = useState("Arial")


  const FONTS = [
  "Arial",
  "Inter",
  "Poppins",
  "Roboto",
  "Times New Roman",
  "Courier New"
]


  const isText =
    selectedObject && selectedObject.type === "textbox"

  

  /* ------------------ Sync UI from selected text ------------------ */
  // useEffect(() => {
  //   if (!isText) return

  //   const obj = selectedObject as fabric.Textbox

  //   const actualFontSize =
  //     (obj.fontSize || 24) * (obj.scaleY || 1)

  //   obj.set({
  //     scaleX: 1,
  //     scaleY: 1,
  //     fontSize: actualFontSize
  //   })

  //   setText(obj.text || "")
  //   setFontSize(Math.round(actualFontSize))
  //   setColor((obj.fill as string) || "#000000")

  //   canvas?.requestRenderAll()
  // }, [selectedObject])

  useEffect(() => {
  if (isText) {
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
  }
}, [selectedObject])


const updateFontFamily = (value: string) => {
  if (!isText || !canvas) return

  const obj = selectedObject as fabric.Textbox
  obj.set("fontFamily", value)

  obj.initDimensions()
  canvas.requestRenderAll()
  setFontFamily(value)
}



  /* ------------------ Add Text ------------------ */
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
    canvas.renderAll()

  }

  /* ------------------ Update Text ------------------ */
  const updateText = (value: string) => {
    if (!isText || !canvas) return
    

    const obj = selectedObject as fabric.Textbox
    obj.set("text", value)

    canvas.requestRenderAll()
    setText(value)

  }

  /* ------------------ Update Font Size ------------------ */
  const updateFontSize = (value: number) => {
    if (!isText || !canvas) return

    
    const obj = selectedObject as fabric.Textbox

    obj.set({
      fontSize: value,
      scaleX: 1,
      scaleY: 1
    })

    // Force Fabric to recompute box size correctly
    obj.set({
      width: obj.calcTextWidth() + 10
    })

    obj.initDimensions()
    canvas.requestRenderAll()
    setFontSize(value)

  }

  /* ------------------ Update Color ------------------ */
  const updateColor = (value: string) => {
    if (!isText || !canvas) return
    

    const obj = selectedObject as fabric.Textbox
    
    obj.set("fill", value)

    canvas.requestRenderAll()
    setColor(value)

  }

  return (
    <div className="space-y-3">
      <button
        onClick={addText}
        className="w-full rounded bg-black px-3 py-2 text-sm text-white"
      >
        Add Text
      </button>

      {isText && (
        <>
          <input
            type="text"
            value={text}
            onChange={e => updateText(e.target.value)}
            className="
              w-full rounded-md border border-gray-300
              bg-white px-3 py-2 text-sm text-gray-900
              placeholder-gray-400 focus:border-black focus:outline-none
            "
          />

          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-black">
              Size
            </label>
            <input
              type="range"
              min={10}
              max={80}
              value={fontSize}
              onChange={e =>
                updateFontSize(Number(e.target.value))
              }
              className="flex-1 cursor-pointer accent-black"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-black">
              Font
            </label>

            <select
              value={fontFamily}
              onChange={e => updateFontFamily(e.target.value)}
              className="
                flex-1 rounded-md border border-gray-300
                bg-white px-2 py-1 text-sm text-gray-900
                focus:border-black focus:outline-none
              "
            >
              {FONTS.map(font => (
                <option
                  key={font}
                  value={font}
                  style={{ fontFamily: font }}
                >
                  {font}
                </option>
              ))}
            </select>
          </div>


          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-black">
              Color
            </label>
            <input
              type="color"
              value={color}
              onChange={e => updateColor(e.target.value)}
              className="
                h-8 w-10 cursor-pointer
                rounded border border-gray-300
              "
            />
          </div>
        </>
      )}
    </div>
  )
}
