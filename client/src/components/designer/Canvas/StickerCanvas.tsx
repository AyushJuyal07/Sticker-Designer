"use client"

import { useEffect, useRef } from "react"
import * as fabric from "fabric"
import { useDesigner } from "@/stores/designer.context"

export default function StickerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const {
    setCanvas,
    setSelectedObject,
    saveSnapshot,
  } = useDesigner()

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const size = containerRef.current.clientWidth

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: size,
      height: size,
      backgroundColor: "#ffffff",
      preserveObjectStacking: true,
    })

    /* ------------------ Circular Clip Mask ------------------ */
    const clipCircle = new fabric.Circle({
      radius: size / 2,
      left: size / 2,
      top: size / 2,
      originX: "center",
      originY: "center",
      absolutePositioned: true,
    })

    canvas.clipPath = clipCircle

    /* ------------------ Selection Styling ------------------ */
    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerStyle = "circle"
    fabric.Object.prototype.cornerColor = "#000"
    fabric.Object.prototype.borderColor = "#000"
    fabric.Object.prototype.cornerSize = 8

    /* ------------------ Selection Events ------------------ */
    canvas.on("selection:created", (e) =>
      setSelectedObject(e.selected?.[0] || null)
    )

    canvas.on("selection:updated", (e) =>
      setSelectedObject(e.selected?.[0] || null)
    )

    canvas.on("selection:cleared", () =>
      setSelectedObject(null)
    )

    /* ------------------ Undo Snapshots ------------------ */
    canvas.on("object:added", saveSnapshot)
    canvas.on("object:modified", saveSnapshot)
    canvas.on("object:removed", saveSnapshot)

    /* ------------------ Register Canvas ------------------ */
    setCanvas(canvas)

    /* ------------------ Load Draft ------------------ */
    const raw = localStorage.getItem("sticker-designer-draft")

    if (raw) {
      canvas.loadFromJSON(JSON.parse(raw), () => {
        canvas.calcOffset()
        requestAnimationFrame(() => {
          canvas.requestRenderAll()
        })
      })
    }

    saveSnapshot()

    return () => {
      canvas.dispose()
    }
  }, [])

  return (
    <div className="relative flex justify-center">
      {/* <div
        ref={containerRef}
        className="
          rounded-full bg-white shadow-2xl border border-gray-400
          w-[280px] h-[280px]
          sm:w-[320px] sm:h-[320px]
          md:w-[420px] md:h-[420px]
        "
      > */}
      <div
        ref={containerRef}
        className="
          rounded-full
          bg-white
          border border-gray-300
          shadow-xl
          overflow-hidden
          mx-auto
          sm:w-[320px] sm:h-[320px]
          md:w-[420px] md:h-[420px]
        "
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
