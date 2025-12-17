// "use client"

// import {
//   createContext,
//   useContext,
//   useRef,
//   useState
// } from "react"
// import * as fabric from "fabric"


// type DesignerContextType = {
//   canvas: fabric.Canvas | null
//   setCanvas: (c: fabric.Canvas) => void
//   selectedObject: fabric.Object | null
//   setSelectedObject: (obj: fabric.Object | null) => void
// }

// const DesignerContext = createContext<DesignerContextType | null>(null)

// export const DesignerProvider = ({
//   children
// }: {
//   children: React.ReactNode
// }) => {
//   const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
//   const [selectedObject, setSelectedObject] =
//     useState<fabric.Object | null>(null)

//   return (
//     <DesignerContext.Provider
//       value={{
//         canvas,
//         setCanvas,
//         selectedObject,
//         setSelectedObject
//       }}
//     >
//       {children}
//     </DesignerContext.Provider>
//   )
// }

// export const useDesigner = () => {
//   const ctx = useContext(DesignerContext)
//   if (!ctx) {
//     throw new Error("useDesigner must be used inside DesignerProvider")
//   }
//   return ctx
// }


// "use client"

// import {
//   createContext,
//   useContext,
//   useRef,
//   useState
// } from "react"
// import * as fabric from "fabric"

// type DesignerContextType = {
//   canvas: fabric.Canvas | null
//   setCanvas: (c: fabric.Canvas) => void
//   selectedObject: fabric.Object | null
//   setSelectedObject: (obj: fabric.Object | null) => void
//   saveState: () => void
//   undo: () => void
//   redo: () => void
// }

// const DesignerContext = createContext<DesignerContextType | null>(null)

// export const DesignerProvider = ({
//   children
// }: {
//   children: React.ReactNode
// }) => {
//   const [canvas, setCanvasState] =
//     useState<fabric.Canvas | null>(null)

//   const [selectedObject, setSelectedObject] =
//     useState<fabric.Object | null>(null)

//   // History stacks
//   const historyRef = useRef<string[]>([])
//   const redoRef = useRef<string[]>([])

//   /**
//    * Set canvas instance and store initial state
//    */
//   const setCanvas = (c: fabric.Canvas) => {
//     setCanvasState(c)

//     const initialState = JSON.stringify(c.toJSON())
//     historyRef.current = [initialState]
//     redoRef.current = []
//   }

//   /**
//    * Save current canvas state
//    */
//   const saveState = () => {
//     if (!canvas) return

//     const json = JSON.stringify(canvas.toJSON())

//     const last = historyRef.current.at(-1)
//     if (json === last) return

//     historyRef.current.push(json)

//     if (historyRef.current.length > 50) {
//       historyRef.current.shift()
//     }

//     redoRef.current = []
//   }

//   /**
//    * Undo last action
//    */
//   const undo = () => {
//     if (!canvas) return
//     if (historyRef.current.length < 2) return

//     const current = historyRef.current.pop()
//     if (current) {
//       redoRef.current.push(current)
//     }

//     const prev = historyRef.current.at(-1)
//     if (!prev) return

//     canvas.loadFromJSON(prev, () => {
//       canvas.renderAll()
//     })
//   }

//   /**
//    * Redo last undone action
//    */
//   const redo = () => {
//     if (!canvas) return
//     if (redoRef.current.length === 0) return

//     const state = redoRef.current.pop()
//     if (!state) return

//     historyRef.current.push(state)

//     canvas.loadFromJSON(state, () => {
//       canvas.renderAll()
//     })
//   }

//   return (
//     <DesignerContext.Provider
//       value={{
//         canvas,
//         setCanvas,
//         selectedObject,
//         setSelectedObject,
//         saveState,
//         undo,
//         redo
//       }}
//     >
//       {children}
//     </DesignerContext.Provider>
//   )
// }

// export const useDesigner = () => {
//   const ctx = useContext(DesignerContext)
//   if (!ctx) {
//     throw new Error(
//       "useDesigner must be used inside DesignerProvider"
//     )
//   }
//   return ctx
// }

// "use client"

// import {
//   createContext,
//   useContext,
//   useRef,
//   useState
// } from "react"
// import * as fabric from "fabric"

// type DesignerContextType = {
//   canvas: fabric.Canvas | null
//   setCanvas: (c: fabric.Canvas) => void
//   selectedObject: fabric.Object | null
//   setSelectedObject: (obj: fabric.Object | null) => void
//   saveState: () => void
//   undo: () => void
//   redo: () => void
// }

// const DesignerContext = createContext<DesignerContextType | null>(null)

// export const DesignerProvider = ({
//   children
// }: {
//   children: React.ReactNode
// }) => {
//   const [canvas, setCanvasState] =
//     useState<fabric.Canvas | null>(null)

//   const [selectedObject, setSelectedObject] =
//     useState<fabric.Object | null>(null)

//   const historyRef = useRef<string[]>([])
//   const redoRef = useRef<string[]>([])

//   // 🔒 IMPORTANT FLAG
//   const isRestoringRef = useRef(false)

//   /* ------------------ Canvas Registration ------------------ */
//   const setCanvas = (c: fabric.Canvas) => {
//     setCanvasState(c)

//     const initialState = JSON.stringify(c.toJSON())
//     historyRef.current = [initialState]
//     redoRef.current = []
//   }

//   /* ------------------ Save State ------------------ */
//   const saveState = () => {
//     if (!canvas) return
//     if (isRestoringRef.current) return

//     const json = JSON.stringify(canvas.toJSON())
//     const last = historyRef.current.at(-1)

//     if (json === last) return

//     historyRef.current.push(json)

//     if (historyRef.current.length > 50) {
//       historyRef.current.shift()
//     }

//     redoRef.current = []
//   }

//   /* ------------------ Undo ------------------ */
//   const undo = () => {
//     if (!canvas) return
//     if (historyRef.current.length < 2) return

//     isRestoringRef.current = true

//     const current = historyRef.current.pop()
//     if (current) redoRef.current.push(current)

//     const prev = historyRef.current.at(-1)
//     if (!prev) {
//       isRestoringRef.current = false
//       return
//     }

//     canvas.loadFromJSON(prev, () => {
//       canvas.renderAll()
//       isRestoringRef.current = false
//     })
//   }

//   /* ------------------ Redo ------------------ */
//   const redo = () => {
//     if (!canvas) return
//     if (redoRef.current.length === 0) return

//     isRestoringRef.current = true

//     const state = redoRef.current.pop()
//     if (!state) {
//       isRestoringRef.current = false
//       return
//     }

//     historyRef.current.push(state)

//     canvas.loadFromJSON(state, () => {
//       canvas.renderAll()
//       isRestoringRef.current = false
//     })
//   }

//   return (
//     <DesignerContext.Provider
//       value={{
//         canvas,
//         setCanvas,
//         selectedObject,
//         setSelectedObject,
//         saveState,
//         undo,
//         redo
//       }}
//     >
//       {children}
//     </DesignerContext.Provider>
//   )
// }

// export const useDesigner = () => {
//   const ctx = useContext(DesignerContext)
//   if (!ctx) {
//     throw new Error(
//       "useDesigner must be used inside DesignerProvider"
//     )
//   }
//   return ctx
// }


// "use client"

// import {
//   createContext,
//   useContext,
//   useRef,
//   useState,
//   useCallback
// } from "react"
// import * as fabric from "fabric"

// type DesignerContextType = {
//   canvas: fabric.Canvas | null
//   setCanvas: (c: fabric.Canvas) => void
//   selectedObject: fabric.Object | null
//   setSelectedObject: (obj: fabric.Object | null) => void
//   saveState: () => void
//   undo: () => void
//   redo: () => void
// }

// const DesignerContext = createContext<DesignerContextType | null>(null)

// export const DesignerProvider = ({
//   children
// }: {
//   children: React.ReactNode
// }) => {
//   const [canvas, setCanvasState] =
//     useState<fabric.Canvas | null>(null)

//   const [selectedObject, setSelectedObject] =
//     useState<fabric.Object | null>(null)

//   const historyRef = useRef<string[]>([])
//   const redoRef = useRef<string[]>([])

//   // 🔒 IMPORTANT FLAG
//   const isRestoringRef = useRef(false)

//   /* ------------------ Canvas Registration ------------------ */
//   const setCanvas = useCallback((c: fabric.Canvas) => {
//     setCanvasState(c)

//     const initialState = JSON.stringify(c.toJSON())
//     historyRef.current = [initialState]
//     redoRef.current = []
//   }, [])

//   /* ------------------ Save State ------------------ */
//   const saveState = useCallback(() => {
//     if (!canvas) return
//     if (isRestoringRef.current) return

//     const json = JSON.stringify(canvas.toJSON())
//     const last = historyRef.current.at(-1)

//     if (json === last) return

//     historyRef.current.push(json)

//     if (historyRef.current.length > 50) {
//       historyRef.current.shift()
//     }

//     redoRef.current = []
//   }, [canvas])

//   /* ------------------ Undo ------------------ */
//   const undo = useCallback(() => {
//     if (!canvas) return
//     if (historyRef.current.length < 2) return

//     isRestoringRef.current = true

//     const current = historyRef.current.pop()
//     if (current) redoRef.current.push(current)

//     const prev = historyRef.current.at(-1)
//     if (!prev) {
//       isRestoringRef.current = false
//       return
//     }

//     canvas.loadFromJSON(prev, () => {
//       canvas.renderAll()
//       isRestoringRef.current = false
//     })
//   }, [canvas])

//   /* ------------------ Redo ------------------ */
//   const redo = useCallback(() => {
//     if (!canvas) return
//     if (redoRef.current.length === 0) return

//     isRestoringRef.current = true

//     const state = redoRef.current.pop()
//     if (!state) {
//       isRestoringRef.current = false
//       return
//     }

//     historyRef.current.push(state)

//     canvas.loadFromJSON(state, () => {
//       canvas.renderAll()
//       isRestoringRef.current = false
//     })
//   }, [canvas])

//   return (
//     <DesignerContext.Provider
//       value={{
//         canvas,
//         setCanvas,
//         selectedObject,
//         setSelectedObject,
//         saveState,
//         undo,
//         redo
//       }}
//     >
//       {children}
//     </DesignerContext.Provider>
//   )
// }

// export const useDesigner = () => {
//   const ctx = useContext(DesignerContext)
//   if (!ctx) {
//     throw new Error(
//       "useDesigner must be used inside DesignerProvider"
//     )
//   }
//   return ctx
// }


"use client"

import { createContext, useContext, useRef, useState } from "react"
import * as fabric from "fabric"

type DesignerContextType = {
  canvas: fabric.Canvas | null
  setCanvas: (c: fabric.Canvas) => void

  selectedObject: fabric.Object | null
  setSelectedObject: (obj: fabric.Object | null) => void

  saveSnapshot: () => void
  undo: () => void
}

const DesignerContext = createContext<DesignerContextType | null>(null)

export function DesignerProvider({ children }: { children: React.ReactNode }) {
  const [canvas, setCanvasState] = useState<fabric.Canvas | null>(null)
  const [selectedObject, setSelectedObject] =
    useState<fabric.Object | null>(null)

  const historyRef = useRef<string[]>([])
  const isRestoringRef = useRef(false)

  /* ------------------ Canvas Setup ------------------ */
  const setCanvas = (c: fabric.Canvas) => {
    setCanvasState(c)

    // ✅ CRITICAL: initial snapshot
    historyRef.current = [
      JSON.stringify(c.toDatalessJSON())
    ]
  }

  /* ------------------ Snapshot ------------------ */
  const saveSnapshot = () => {
    if (!canvas) return
    if (isRestoringRef.current) return

    const json = JSON.stringify(canvas.toDatalessJSON())
    const last = historyRef.current.at(-1)

    // Prevent duplicate snapshots
    if (json === last) return

    historyRef.current.push(json)
  }

  /* ------------------ Undo ------------------ */
//   const undo = () => {
//     if (!canvas) return
//     if (historyRef.current.length < 2) return

//     isRestoringRef.current = true

//     // Remove current state
//     historyRef.current.pop()

//     const prev = historyRef.current.at(-1)!
//     canvas.loadFromJSON(prev, () => {
//       canvas.renderAll()
//       setSelectedObject(null)
//       isRestoringRef.current = false
//     })
//   }

    const undo = () => {
    if (!canvas) return
    if (historyRef.current.length <= 1) return

    isRestoringRef.current = true
    historyRef.current.pop()

    const prev = historyRef.current.at(-1)!
    canvas.loadFromJSON(prev, () => {
        canvas.renderAll()
        isRestoringRef.current = false
    })
    }

  return (
    <DesignerContext.Provider
      value={{
        canvas,
        setCanvas,
        selectedObject,
        setSelectedObject,
        saveSnapshot,
        undo
      }}
    >
      {children}
    </DesignerContext.Provider>
  )
}

export function useDesigner() {
  const ctx = useContext(DesignerContext)
  if (!ctx) {
    throw new Error("useDesigner must be used inside DesignerProvider")
  }
  return ctx
}

