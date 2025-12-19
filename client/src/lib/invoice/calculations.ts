import { PRICE_MAP } from "@/lib/order/pricing"
import { CartItem } from "./types"

export const TAX_RATE = 0.18

export function calculateSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => {
    const unitPrice = PRICE_MAP[item.size] // ✅ now safe
    return sum + unitPrice * item.quantity
  }, 0)
}

export function calculateTax(subtotal: number) {
  return Math.round(subtotal * TAX_RATE)
}

export function calculateTotal(subtotal: number, tax: number) {
  return subtotal + tax
}
