// "use client"

// import { createContext, useContext, useState } from "react"

// export type CartItem = {
//   id: string
//   preview: string
//   size: "S" | "M" | "L"
//   quantity: number
//   price: number
// }

// type CartContextType = {
//   items: CartItem[]
//   addItem: (item: CartItem) => void
//   removeItem: (id: string) => void
//   clearCart: () => void
// }

// const CartContext = createContext<CartContextType | null>(null)

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([])

//   const addItem = (item: CartItem) => {
//     setItems(prev => [...prev, item])
//   }

//   const removeItem = (id: string) => {
//     setItems(prev => prev.filter(item => item.id !== id))
//   }

//   const clearCart = () => {
//     setItems([])
//   }

//   return (
//     <CartContext.Provider
//       value={{ items, addItem, removeItem, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export function useCart() {
//   const ctx = useContext(CartContext)
//   if (!ctx) throw new Error("useCart must be used inside CartProvider")
//   return ctx
// }


"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type CartItem = {
  id: string
  preview: string
  size: "S" | "M" | "L"
  quantity: number
  price: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const STORAGE_KEY = "sticker-cart"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // ✅ Load cart from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      setItems(JSON.parse(raw))
    }
  }, [])

  // ✅ Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems(prev => [...prev, item])
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
