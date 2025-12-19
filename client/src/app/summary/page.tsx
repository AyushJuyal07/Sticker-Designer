"use client"

import Image from "next/image"
import { useOrder } from "@/stores/order.context"
import { useCart } from "@/stores/cart.context"
import { calculateLineTotal, getUnitPrice, PRICE_MAP  } from "@/lib/order/pricing"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid"

export default function SummaryPage() {
  const {
    order,
    setSize,
    setQuantity,
  } = useOrder()

  const { addItem } = useCart()
  const router = useRouter()


  const total = calculateLineTotal(order.size, order.quantity)

  const isValid =
    !!order.preview &&
    order.quantity >= 1 &&
    !!order.size

const handleAddToCart = () => {
  if (!isValid) {
    toast.error("Please complete your order details")
    return
  }

  addItem({
    id: uuidv4(),
    preview: order.preview!,
    size: order.size,
    quantity: order.quantity,
    unitPrice: PRICE_MAP[order.size],
  })

  toast.success("Added to cart")
  router.push("/cart")
}

  return (
    <div className="min-h-screen bg-[#FFEFEF] px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">

        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-900">
          Design Summary
        </h1>

        {/* Sticker Preview */}
        {order.preview ? (
          <div className="flex justify-center">
            <div className="border-2 rounded-full">
                <Image
                src={order.preview}
                alt="Sticker Preview"
                width={220}
                height={220}
                className="rounded-full border"
                />

            </div>
          </div>
        ) : (
          <div className="text-sm text-red-500 text-center">
            No design preview available
          </div>
        )}

        {/* Size Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Size</label>
          <div className="flex gap-2">
            {(["S", "M", "L"] as const).map(size => (
              <button
                key={size}
                onClick={() => setSize(size)}
                className={`
                  flex-1 py-2 rounded-lg border text-sm cursor-pointer
                  ${
                    order.size === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Quantity</label>
          <input
            type="number"
            min={1}
            value={order.quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2 text-sm text-gray-900"
          />
        </div>

        {/* Price */}
        <div className="flex justify-between items-center text-sm font-medium text-gray-900">
          <span>Total Price</span>
          <span>₹{total}</span>
        </div>

        {/* Validation message */}
        {!isValid && (
          <p className="text-xs text-red-500">
            Please complete your design before proceeding
          </p>
        )}

        {/* Add to Cart */}

        <div className="flex justify-center">
            <button
                onClick={handleAddToCart}
                disabled={!isValid}
                className={`
                rounded-full px-10 py-3
                text-sm font-medium
                border transition active:scale-95
                cursor-pointer
                ${
                    isValid
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }
                `}
            >
                Add to Cart
            </button>
            </div>

      </div>
    </div>
  )
}
