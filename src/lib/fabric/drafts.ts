import * as fabric from "fabric"

const DRAFT_KEY = "sticker-designer-draft"

export function saveCanvasDraft(canvas: fabric.Canvas) {
  const json = canvas.toDatalessJSON()
  localStorage.setItem(DRAFT_KEY, JSON.stringify(json))
}

export function clearCanvasDraft() {
  localStorage.removeItem(DRAFT_KEY)
}

