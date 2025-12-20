import * as fabric from "fabric"

export async function exportCircularPNG(
  canvas: fabric.Canvas,
  size = 1024,
  whiteBackground = false
) {
  // Clone canvas (IMPORTANT: pass empty array)
  const clone = await canvas.clone([])

  const originalWidth = canvas.getWidth()!
  const multiplier = size / originalWidth

  clone.setWidth(originalWidth)
  clone.setHeight(originalWidth)


  clone.setDimensions({
    width: originalWidth,
    height: originalWidth
  })


  // ✅ Optional white background
  if (whiteBackground) {
    clone.backgroundColor = "#ffffff"
  } else {
    clone.backgroundColor = "transparent"
  }

  // ✅ Circular clip
  const clipCircle = new fabric.Circle({
    radius: originalWidth / 2,
    left: originalWidth / 2,
    top: originalWidth / 2,
    originX: "center",
    originY: "center",
    absolutePositioned: true
  })

  clone.clipPath = clipCircle
  clone.renderAll()

  const dataURL = clone.toDataURL({
    format: "png",
    multiplier,
    enableRetinaScaling: true
  })

  clone.dispose()

  return dataURL
}
