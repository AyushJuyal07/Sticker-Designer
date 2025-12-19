"use client"

import { useRef } from "react"
import * as fabric from "fabric"
import { useDesigner } from "@/stores/designer.context"
import { toast } from "sonner"

const ACCEPTED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/svg+xml"
]

/* 🔹 REUSABLE UPLOAD LOGIC */
export function useImageUpload() {
  const { canvas } = useDesigner()

  const handleFile = (file: File) => {
    if (!canvas) return
    if (!ACCEPTED_TYPES.includes(file.type)){
      toast.error("Unsupported file type")
      return
    } 

    const reader = new FileReader()

    reader.onload = async () => {
      if (!canvas) return

      const dataUrl = reader.result as string
      const img = await fabric.Image.fromURL(dataUrl)

      const scale = Math.min(
        200 / img.width!,
        200 / img.height!
      )

      img.set({
        left: canvas.width! / 2,
        top: canvas.height! / 2,
        originX: "center",
        originY: "center",
        scaleX: scale,
        scaleY: scale,
        selectable: true
      })

      canvas.add(img)
      canvas.setActiveObject(img)
      canvas.renderAll()

      toast.success("Image added to canvas")
    }

    reader.readAsDataURL(file)
  }

  return { handleFile }
}

/* 🔹 DESKTOP COMPONENT (UNCHANGED UI) */
export default function ImageUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { handleFile } = useImageUpload()

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={e => e.preventDefault()}
      onClick={() => inputRef.current?.click()}
      className="
        group cursor-pointer rounded-xl border-2 border-dashed border-gray-300
        bg-gray-50 p-4 text-center transition
        hover:border-black hover:bg-white
      "
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept={ACCEPTED_TYPES.join(",")}
        onChange={onInputChange}
      />

      <div className="flex flex-col items-center gap-2">
        <div className="text-2xl">📤</div>
        <p className="text-sm font-medium text-gray-700">
          Drag & drop image
        </p>
        <p className="text-xs text-gray-500">
          or click to upload
        </p>
        <span className="text-[10px] text-gray-400">
          PNG, JPG, SVG
        </span>
      </div>
    </div>
  )
}
