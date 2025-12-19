"use client"

import { createContext, useContext, useState } from "react"

export type StickerSize = "S" | "M" | "L"

type OrderState = {
  preview?: string
  quantity: number
  size: StickerSize
}

type OrderContextType = {
  order: OrderState
  setPreview: (img: string) => void
  setQuantity: (qty: number) => void
  setSize: (size: StickerSize) => void
}

const OrderContext = createContext<OrderContextType | null>(null)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<OrderState>({
    quantity: 1,
    size: "M",
  })

  const setPreview = (img: string) =>
    setOrder(prev => ({ ...prev, preview: img }))

  const setQuantity = (quantity: number) =>
    setOrder(prev => ({ ...prev, quantity }))

  const setSize = (size: StickerSize) =>
    setOrder(prev => ({ ...prev, size }))

  return (
    <OrderContext.Provider
      value={{
        order,
        setPreview,
        setQuantity,
        setSize,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error("useOrder must be used inside OrderProvider")
  return ctx
}
