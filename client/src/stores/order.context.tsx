// "use client"

// import { createContext, useContext, useMemo, useState } from "react"

// type StickerSize = "S" | "M" | "L"

// type OrderState = {
//   preview: string | null
//   size: StickerSize | null
//   quantity: number
// }

// type OrderContextType = {
//   order: OrderState
//   setPreview: (preview: string) => void
//   setSize: (size: StickerSize) => void
//   setQuantity: (quantity: number) => void
//   resetOrder: () => void
//   price: number
// }

// const BASE_PRICE = 50

// const SIZE_MULTIPLIER: Record<StickerSize, number> = {
//   S: 1,
//   M: 1.5,
//   L: 2,
// }

// const OrderContext = createContext<OrderContextType | null>(null)

// export function OrderProvider({ children }: { children: React.ReactNode }) {
//   const [order, setOrder] = useState<OrderState>({
//     preview: null,
//     size: null,
//     quantity: 1,
//   })

//   const setPreview = (preview: string) =>
//     setOrder(prev => ({ ...prev, preview }))

//   const setSize = (size: StickerSize) =>
//     setOrder(prev => ({ ...prev, size }))

//   const setQuantity = (quantity: number) =>
//     setOrder(prev => ({ ...prev, quantity }))

//   const resetOrder = () =>
//     setOrder({
//       preview: null,
//       size: null,
//       quantity: 1,
//     })

//   const price = useMemo(() => {
//     if (!order.size) return 0
//     return BASE_PRICE * SIZE_MULTIPLIER[order.size] * order.quantity
//   }, [order.size, order.quantity])

//   return (
//     <OrderContext.Provider
//       value={{
//         order,
//         setPreview,
//         setSize,
//         setQuantity,
//         resetOrder,
//         price,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   )
// }

// export function useOrder() {
//   const ctx = useContext(OrderContext)
//   if (!ctx) throw new Error("useOrder must be used within OrderProvider")
//   return ctx
// }

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
