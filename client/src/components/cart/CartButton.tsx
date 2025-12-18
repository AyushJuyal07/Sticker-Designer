"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/stores/cart.context"
import { useRouter } from "next/navigation"

export default function CartButton() {
  const { items } = useCart()
  const router = useRouter()

  return (
    <button
      onClick={() => router.push("/cart")}
      className="
        fixed top-4 right-4 z-50
        h-12 w-12
        rounded-full
        bg-white text-black
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        active:scale-95
        transition
        cursor-pointer
      "
      aria-label="Open cart"
    >
      <ShoppingCart size={20} />

      {items.length > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            min-w-[18px] h-[18px]
            px-1
            flex items-center justify-center
            text-[10px] font-medium
            rounded-full
            bg-black text-white
          "
        >
          {items.length}
        </span>
      )}
    </button>
  )
}
