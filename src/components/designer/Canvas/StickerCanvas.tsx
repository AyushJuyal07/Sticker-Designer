// "use client"

// import { useEffect, useRef } from "react"
// import * as fabric from "fabric"
// import { useDesigner } from "@/stores/designer.context"

// export default function StickerCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)
//   const { setCanvas, setSelectedObject } = useDesigner()

//   useEffect(() => {
//   if (!canvasRef.current) return

//   const canvas = new fabric.Canvas(canvasRef.current, {
//     width: 400,
//     height: 400,
//     backgroundColor: "#ffffff"
//   })

//   canvas.on("selection:created", e =>
//     setSelectedObject(e.selected?.[0] || null)
//   )

//   canvas.on("selection:updated", e =>
//     setSelectedObject(e.selected?.[0] || null)
//   )

//   canvas.on("selection:cleared", () =>
//     setSelectedObject(null)
//   )

//   setCanvas(canvas)

//   return () => {
//     // Explicitly ignore the Promise
//     void canvas.dispose()
//   }
// }, [])

//   return (
//     <div className="rounded-full bg-white shadow-lg p-4">
//       <canvas ref={canvasRef} />
//     </div>
//   )
// }


"use client"

import { useEffect, useRef } from "react"
import * as fabric from "fabric"
import { useDesigner } from "@/stores/designer.context"

export default function StickerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const {
    setCanvas,
    setSelectedObject,
    saveSnapshot
  } = useDesigner()

  useEffect(() => {
    if (!canvasRef.current) return

    const size = 420

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: size,
      height: size,
      backgroundColor: "#ffffff",
      preserveObjectStacking: true
    })

    /* ------------------ Circular Clip Mask ------------------ */
    const clipCircle = new fabric.Circle({
      radius: size / 2,
      left: size / 2,
      top: size / 2,
      originX: "center",
      originY: "center",
      absolutePositioned: true
    })

    canvas.clipPath = clipCircle

    /* ------------------ Selection Styling ------------------ */
    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerStyle = "circle"
    fabric.Object.prototype.cornerColor = "#000"
    fabric.Object.prototype.borderColor = "#000"
    fabric.Object.prototype.cornerSize = 8

    /* ------------------ Selection Events ------------------ */
    canvas.on("selection:created", e =>
      setSelectedObject(e.selected?.[0] || null)
    )

    canvas.on("selection:updated", e =>
      setSelectedObject(e.selected?.[0] || null)
    )

    canvas.on("selection:cleared", () =>
      setSelectedObject(null)
    )

    /* ------------------ Undo Snapshot ------------------ */
    canvas.on("object:modified", () => {
      saveSnapshot()
    })

    canvas.on("object:added", () => {
      saveSnapshot()
    })

    canvas.on("object:removed", () => {
      saveSnapshot()
    })

    
    // canvas.on("mouse:up", () => {
    //   saveSnapshot()
    // })

    /* ------------------ Register Canvas ------------------ */
    setCanvas(canvas)
    saveSnapshot()
    
    return () => {
      canvas.dispose()
    }
  }, [])

  return (
    <div className="relative">
      <div className="rounded-full bg-white shadow-2xl p-4">
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}



// "use client"

// import { useEffect, useRef } from "react"
// import * as fabric from "fabric"
// import { useDesigner } from "@/stores/designer.context"

// export default function StickerCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)

//   const {
//     setCanvas,
//     setSelectedObject,
//     saveState
//   } = useDesigner()

//   // Store saveState in a ref so we always have the latest version
//   const saveStateRef = useRef(saveState)
  
//   useEffect(() => {
//     saveStateRef.current = saveState
//   }, [saveState])

//   useEffect(() => {
//     if (!canvasRef.current) return

//     const size = 420

//     const canvas = new fabric.Canvas(canvasRef.current, {
//       width: size,
//       height: size,
//       backgroundColor: "#ffffff",
//       preserveObjectStacking: true
//     })

//     /* ------------------ Circular Clip Mask ------------------ */
//     const clipCircle = new fabric.Circle({
//       radius: size / 2,
//       left: size / 2,
//       top: size / 2,
//       originX: "center",
//       originY: "center",
//       absolutePositioned: true
//     })

//     canvas.clipPath = clipCircle

//     /* ------------------ Selection Styling ------------------ */
//     fabric.Object.prototype.transparentCorners = false
//     fabric.Object.prototype.cornerStyle = "circle"
//     fabric.Object.prototype.cornerColor = "#000"
//     fabric.Object.prototype.borderColor = "#000"
//     fabric.Object.prototype.cornerSize = 8

//     /* ------------------ Selection Events ------------------ */
//     canvas.on("selection:created", e =>
//       setSelectedObject(e.selected?.[0] || null)
//     )

//     canvas.on("selection:updated", e =>
//       setSelectedObject(e.selected?.[0] || null)
//     )

//     canvas.on("selection:cleared", () =>
//       setSelectedObject(null)
//     )

//     /* ------------------ History Events (Undo / Redo) ------------------ */
//     const handleHistoryEvent = () => {
//       saveStateRef.current()
//     }

//     canvas.on("object:added", handleHistoryEvent)
//     canvas.on("object:modified", handleHistoryEvent)
//     canvas.on("object:removed", handleHistoryEvent)

//     /* ------------------ Register Canvas ------------------ */
//     setCanvas(canvas)

//     /* ------------------ Cleanup ------------------ */
//     return () => {
//       void canvas.dispose()
//     }
//   }, [setCanvas, setSelectedObject])

//   return (
//     <div className="relative">
//       <div className="rounded-full bg-white shadow-2xl p-4">
//         <canvas ref={canvasRef} />
//       </div>
//     </div>
//   )
// }


// "use client"

// import { useEffect, useRef } from "react"
// import * as fabric from "fabric"
// import { useDesigner } from "@/stores/designer.context"

// export default function StickerCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)

//   const {
//     setCanvas,
//     setSelectedObject,
//     saveState
//   } = useDesigner()

//   // Store saveState in a ref so we always have the latest version
//   const saveStateRef = useRef(saveState)
  
//   useEffect(() => {
//     saveStateRef.current = saveState
//   }, [saveState])

//   useEffect(() => {
//     if (!canvasRef.current) return

//     const size = 420

//     const canvas = new fabric.Canvas(canvasRef.current, {
//       width: size,
//       height: size,
//       backgroundColor: "#ffffff",
//       preserveObjectStacking: true
//     })

//     /* ------------------ Circular Clip Mask ------------------ */
//     const clipCircle = new fabric.Circle({
//       radius: size / 2,
//       left: size / 2,
//       top: size / 2,
//       originX: "center",
//       originY: "center",
//       absolutePositioned: true
//     })

//     canvas.clipPath = clipCircle

//     /* ------------------ Selection Styling ------------------ */
//     fabric.Object.prototype.transparentCorners = false
//     fabric.Object.prototype.cornerStyle = "circle"
//     fabric.Object.prototype.cornerColor = "#000"
//     fabric.Object.prototype.borderColor = "#000"
//     fabric.Object.prototype.cornerSize = 8

//     /* ------------------ Selection Events ------------------ */
//     canvas.on("selection:created", e =>
//       setSelectedObject(e.selected?.[0] || null)
//     )

//     canvas.on("selection:updated", e =>
//       setSelectedObject(e.selected?.[0] || null)
//     )

//     canvas.on("selection:cleared", () =>
//       setSelectedObject(null)
//     )

//     /* ------------------ History Events (Only for modifications) ------------------ */
//     const handleModified = () => {
//       saveStateRef.current()
//     }

//     // Only listen to object:modified for drag/resize/rotate
//     canvas.on("object:modified", handleModified)

//     /* ------------------ Register Canvas ------------------ */
//     setCanvas(canvas)

//     /* ------------------ Cleanup ------------------ */
//     return () => {
//       void canvas.dispose()
//     }
//   }, [setCanvas, setSelectedObject])

//   return (
//     <div className="relative">
//       <div className="rounded-full bg-white shadow-2xl p-4">
//         <canvas ref={canvasRef} />
//       </div>
//     </div>
//   )
// }