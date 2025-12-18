"use client"

import { useDesigner } from "@/stores/designer.context"
import { useOrder } from "@/stores/order.context"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function ProceedButton() {
  const { canvas } = useDesigner()
  const { setPreview } = useOrder()
  const router = useRouter()

  const handleProceed = () => {
    if (!canvas) {
      toast.error("Canvas not ready")
      return
    }

    // ✅ export canvas as PNG
    const dataUrl = canvas.toDataURL({
      format: "png",
      multiplier: 2,
    })

    setPreview(dataUrl)
    router.push("/summary")
  }

  return (
    <button
      onClick={handleProceed}
      className="
        w-full rounded bg-black text-white px-3 py-2
            text-sm font-medium
            border cursor-pointer
            hover:bg-white hover:text-black active:scale-95 transition
      "
    >
      Proceed
    </button>
  )
}
