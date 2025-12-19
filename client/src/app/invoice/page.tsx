"use client"

import { useEffect, useState } from "react"
import InvoicePreview from "@/components/invoice/InvoicePreview"
import InvoiceActions from "@/components/invoice/InvoiceActions"
import { generateInvoiceNumber } from "@/lib/invoice/generateInvoiceNumber"
import {
  calculateSubtotal,
  calculateTax,
  calculateTotal,
} from "@/lib/invoice/calculations"
import { useCart } from "@/stores/cart.context"

export default function InvoicePage() {
  const { items } = useCart()
  const [template, setTemplate] =
    useState<"classic" | "modern">("classic")

  const [invoice, setInvoice] = useState<any>(null)

  useEffect(() => {
    if (!items.length) return

    const subtotal = calculateSubtotal(items)
    const tax = calculateTax(subtotal)
    const total = calculateTotal(subtotal, tax)

    setInvoice({
      invoiceNumber: generateInvoiceNumber(),
      date: "19/12/2025",
      dueDate: "26/12/2025",
      billTo: {
        name: "John Doe",
        email: "john@example.com",
        address: "Bangalore, India",
      },
      items,
      subtotal,
      tax,
      total,
    })
  }, [items])

  if (!invoice) return null

  return (
    <div className="min-h-screen bg-[#FFEFEF] flex justify-center py-12">
      <div className="w-full max-w-2xl">
        <InvoiceActions
          template={template}
          setTemplate={setTemplate}
        />

        <div id="invoice-pdf">
          <InvoicePreview
            invoice={invoice}
            template={template}
          />
        </div>
      </div>
    </div>
  )
}
