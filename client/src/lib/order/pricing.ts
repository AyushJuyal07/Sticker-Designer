import { StickerSize } from "@/stores/order.context"

export const PRICE_MAP: Record<StickerSize, number> = {
  S: 10,
  M: 15,
  L: 20,
}

export function getUnitPrice(size: StickerSize) {
  return PRICE_MAP[size]
}

export function calculateLineTotal(
  size: StickerSize,
  quantity: number
) {
  return getUnitPrice(size) * quantity
}
