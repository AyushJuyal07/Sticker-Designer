"use client";

import Image from "next/image";
import { useCart } from "@/stores/cart.context";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();
  
  const router = useRouter();
  
  const grandTotal = items.reduce((sum, item) => sum + item.unitPrice, 0);
  
  const handleCheckout = () => {
    if (items.length === 0) return
    router.push("/invoice")
  }
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFEFEF] flex items-center justify-center">
        <p className="text-sm text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFEFEF] px-6 py-8">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Your Cart</h1>

          <button
            onClick={() => router.push("/designer")}
            className="
                px-8 py-3
                rounded-full
                bg-black text-white
                text-sm font-medium
                hover:bg-white
                hover:text-black
                border
                active:scale-95
                transition
                mx-4
                cursor-pointer
                "
          >
            Design More
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT – Items */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6 space-y-6 overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-6 last:border-none"
              >
                <div className="rounded-full border">
                  <Image
                    src={item.preview}
                    alt="Sticker preview"
                    width={96}
                    height={96}
                    className="rounded-full border"
                  />
                </div>

                <div className="flex-1 text-sm text-gray-900 space-y-1">
                  <p>
                    <span className="font-medium">Size:</span> {item.size}
                  </p>
                  <p>
                    <span className="font-medium">Quantity:</span>{" "}
                    {item.quantity}
                  </p>
                </div>

                <div className="text-right space-y-2">
                  <p className="font-medium text-gray-900">₹{item.unitPrice}</p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT – Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit space-y-4">
            <h2 className="text-sm font-semibold text-gray-900">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm text-gray-900">
              <span>Items</span>
              <span>{items.length}</span>
            </div>

            <div className="flex justify-between text-sm font-medium text-gray-900">
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="
                w-full mt-4
                py-3 rounded-full
                bg-black text-white text-sm font-medium
                hover:bg-white
                hover:text-black
                border
                active:scale-95
                transition
                cursor-pointer
              "
            >
              Check Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
