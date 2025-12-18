import { StickerSize } from "@/stores/order.context"

const PRICE_MAP: Record<StickerSize, number> = {
  S: 10,
  M: 15,
  L: 20,
}

export function calculateTotal(
  size: StickerSize,
  quantity: number
) {
  return PRICE_MAP[size] * quantity
}
