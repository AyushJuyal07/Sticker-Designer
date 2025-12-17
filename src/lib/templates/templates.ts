import * as fabric from "fabric"

export type Template = {
  id: string
  name: string
  previewColor: string
  apply: (canvas: fabric.Canvas) => void
}

export const templates: Template[] = [
  {
    id: "minimal",
    name: "Minimal",
    previewColor: "#ffffff",
    apply: canvas => {
      canvas.clear()
      canvas.backgroundColor = "#ffffff"

      const text = new fabric.Textbox("Minimal Sticker", {
        left: canvas.width! / 2,
        top: canvas.height! / 2,
        originX: "center",
        originY: "center",
        fontSize: 28,
        fill: "#000000",
        fontFamily: "Arial"
      })

      canvas.add(text)
      canvas.setActiveObject(text)
      canvas.renderAll()
    }
  },

  {
    id: "bold",
    name: "Bold",
    previewColor: "#000000",
    apply: canvas => {
      canvas.clear()
      canvas.backgroundColor = "#000000"

      const text = new fabric.Textbox("Bold Vibes", {
        left: canvas.width! / 2,
        top: canvas.height! / 2,
        originX: "center",
        originY: "center",
        fontSize: 30,
        fill: "#ffffff",
        fontFamily: "Poppins",
        fontWeight: "bold"
      })

      canvas.add(text)
      canvas.setActiveObject(text)
      canvas.renderAll()
    }
  },

  {
    id: "fun",
    name: "Fun",
    previewColor: "#fde047",
    apply: canvas => {
      canvas.clear()
      canvas.backgroundColor = "#fde047"

      const text = new fabric.Textbox("Fun Time 🎉", {
        left: canvas.width! / 2,
        top: canvas.height! / 2,
        originX: "center",
        originY: "center",
        fontSize: 26,
        fill: "#1f2937",
        fontFamily: "Comic Sans MS"
      })

      canvas.add(text)
      canvas.setActiveObject(text)
      canvas.renderAll()
    }
  }
]
