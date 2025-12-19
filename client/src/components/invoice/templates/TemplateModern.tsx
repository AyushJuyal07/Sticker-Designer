import Image from "next/image"

export default function TemplateModern({ invoice }: any) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white text-black p-10 rounded-lg border space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          INVOICE
        </h1>
        <div className="text-right text-sm">
          <p>{invoice.invoiceNumber}</p>
          <p>{invoice.date}</p>
        </div>
      </div>

      {/* Company */}
      <div className="flex justify-between text-sm">
        <div>
          <p className="font-semibold">Sticker Technologies</p>
          <p>Custom Sticker Solutions</p>
        </div>

        <div>
          <p className="font-semibold">Bill To</p>
          <p>{invoice.billTo.name}</p>
          <p>{invoice.billTo.email}</p>
        </div>
      </div>

      {/* Items */}
      <div className="border rounded-md overflow-hidden">
        {invoice.items.map((item: any) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 py-3 border-b last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.preview}
                alt="Sticker"
                width={36}
                height={36}
                className="rounded-full border"
              />
              <div>
                <p className="text-sm font-medium">
                  Custom Circle Sticker
                </p>
                <p className="text-xs">
                  Qty: {item.quantity}
                </p>
              </div>
            </div>

            <p className="text-sm">
              ₹{item.quantity * item.unitPrice}
            </p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="w-60 text-sm space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{invoice.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>₹{invoice.tax}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{invoice.total}</span>
          </div>
        </div>
      </div>

      <p className="text-xs">
        Payment due by {invoice.dueDate}
      </p>
    </div>
  )
}
