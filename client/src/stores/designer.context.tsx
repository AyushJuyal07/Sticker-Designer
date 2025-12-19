"use client";

import { createContext, useContext, useRef, useState } from "react";
import * as fabric from "fabric";

type DesignerContextType = {
  canvas: fabric.Canvas | null;
  setCanvas: (c: fabric.Canvas) => void;

  selectedObject: fabric.Object | null;
  setSelectedObject: (obj: fabric.Object | null) => void;

  isCropping: boolean;
  setIsCropping: (v: boolean) => void;

  saveSnapshot: () => void;
  undo: () => void;
};

const DesignerContext = createContext<DesignerContextType | null>(null);

export function DesignerProvider({ children }: { children: React.ReactNode }) {
  const [canvas, setCanvasState] = useState<fabric.Canvas | null>(null);
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(
    null
  );

  const [isCropping, setIsCropping] = useState(false);

  const historyRef = useRef<string[]>([]);
  const isRestoringRef = useRef(false);

  /* ------------------ Canvas Setup ------------------ */
  const setCanvas = (c: fabric.Canvas) => {
    setCanvasState(c);

    // ✅ CRITICAL: initial snapshot
    historyRef.current = [JSON.stringify(c.toDatalessJSON())];
  };

  /* ------------------ Snapshot ------------------ */
  const saveSnapshot = () => {
    if (!canvas) return;
    if (isRestoringRef.current) return;

    const json = JSON.stringify(canvas.toDatalessJSON());
    const last = historyRef.current.at(-1);

    // Prevent duplicate snapshots
    if (json === last) return;

    historyRef.current.push(json);
  };

  /* ------------------ Undo ------------------ */

  const undo = () => {
    if (!canvas) return;
    if (historyRef.current.length <= 1) return;

    isRestoringRef.current = true;
    historyRef.current.pop();

    const prev = historyRef.current.at(-1)!;
    canvas.loadFromJSON(prev, () => {
      canvas.renderAll();
      isRestoringRef.current = false;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        canvas,
        setCanvas,
        selectedObject,
        setSelectedObject,
        isCropping,
        setIsCropping,
        saveSnapshot,
        undo,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}

export function useDesigner() {
  const ctx = useContext(DesignerContext);
  if (!ctx) {
    throw new Error("useDesigner must be used inside DesignerProvider");
  }
  return ctx;
}
