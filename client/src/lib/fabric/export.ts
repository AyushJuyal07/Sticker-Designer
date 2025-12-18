// import * as fabric from "fabric"

// export async function exportCircularPNG(
//   canvas: fabric.Canvas,
//   size = 1024
// ) {
//   const clone = await canvas.clone([])

//   const originalWidth = canvas.getWidth()!
//   const multiplier = size / originalWidth

//   // Ensure same dimensions
//   clone.setWidth(originalWidth)
//   clone.setHeight(originalWidth)

//   // Apply circular clip
//   const clipCircle = new fabric.Circle({
//     radius: originalWidth / 2,
//     left: originalWidth / 2,
//     top: originalWidth / 2,
//     originX: "center",
//     originY: "center",
//     absolutePositioned: true
//   })

//   clone.clipPath = clipCircle
//   clone.renderAll()

//   // Export high-res PNG WITHOUT viewport issues
//   const dataURL = clone.toDataURL({
//     format: "png",
//     multiplier,
//     enableRetinaScaling: false
//   })

//   clone.dispose()

//   return dataURL
// }

// import * as fabric from "fabric"

// export async function exportCircularPNG(
//   canvas: fabric.Canvas,
//   size = 1024,
//   whiteBg = false
// ) {
//   const clone = await canvas.clone([])

//   const originalSize = canvas.getWidth()!
//   const multiplier = size / originalSize

//   /* 🔥 CRITICAL: Reset Fabric internals */
//   clone.setWidth(originalSize)
//   clone.setHeight(originalSize)
//   clone.setZoom(1)
//   clone.setViewportTransform([1, 0, 0, 1, 0, 0])
//   clone.calcOffset()

//   /* 🔵 Circular clip */
//   clone.clipPath = new fabric.Circle({
//     radius: originalSize / 2,
//     left: originalSize / 2,
//     top: originalSize / 2,
//     originX: "center",
//     originY: "center",
//     absolutePositioned: true
//   })

//   clone.renderAll()

//   /* 📦 Export */
//   const dataURL = clone.toDataURL({
//     format: "png",
//     multiplier,
//     enableRetinaScaling: false
//   })

//   clone.dispose()
//   return dataURL
// }

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
