"use client"

import { templates } from "@/lib/templates/templates"
import { useDesigner } from "@/stores/designer.context"
import { toast } from "sonner"

export default function Templates() {
  const { canvas } = useDesigner()

  if (!canvas) return null

  const applyTemplate = (applyFn: (c: any) => void) => {
    applyFn(canvas)
    toast.success("Template applied")
  }

  return (
    <div className="space-y-2">
      {/* <h3 className="text-xs font-semibold text-black">
        Templates
      </h3> */}

      <div className="grid grid-cols-3 gap-2 text-gray-900">
        {templates.map(t => (
          <button
            key={t.id}
            onClick={() => applyTemplate(t.apply)}
            className="
              flex flex-col items-center gap-1
              rounded border p-2 text-xs
              hover:bg-gray-50 active:scale-95 transition
              cursor-pointer
            "
          >
            <div
              className="h-8 w-8 rounded-full border"
              style={{ backgroundColor: t.previewColor }}
            />
            <span>{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
