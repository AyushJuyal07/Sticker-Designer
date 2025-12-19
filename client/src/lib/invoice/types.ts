import { StickerSize } from "@/stores/order.context"

export type CartItem = {
  id: string
  preview: string
  size: StickerSize
  quantity: number
  unitPrice: number
}

export type InvoiceItem = {
  id: string
  name: string
  preview: string
  quantity: number
  unitPrice: number
}

export type InvoiceData = {
  invoiceNumber: string
  date: string
  dueDate: string
  billTo: {
    name: string
    email: string
    address: string
  }
  items: InvoiceItem[]
  subtotal: number
  tax: number
  total: number
}
