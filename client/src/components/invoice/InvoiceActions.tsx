// "use client"

// import { exportInvoicePdf } from "@/lib/invoice/exportPdf"
// import { toast } from "sonner"

// export default function InvoiceActions() {
//   return (
//     <div className="flex justify-end gap-3 mb-4">
//       <button
//         onClick={() => exportInvoicePdf("invoice-pdf")}
//         className="px-4 py-2 rounded-lg bg-black text-white text-sm border cursor-pointer
//             hover:bg-white hover:text-black active:scale-95 transition"
 
        
//       >
//         Download PDF
//       </button>

//       <button
//         onClick={() => window.print()}
//         className="px-4 py-2 rounded-lg border text-sm cursor-pointer
//             hover:bg-black hover:text-white active:scale-95 transition"
//       >
//         Print
//       </button>

//       <button
//         onClick={() => toast.success("Invoice emailed (simulated)")}
//         className="px-4 py-2 rounded-lg border text-sm cursor-pointer
//             hover:bg-black hover:text-white active:scale-95 transition"
//       >
//         Email Invoice
//       </button>
//     </div>
//   )
// }


"use client"

import { exportInvoicePdf } from "@/lib/invoice/exportPdf"
import { toast } from "sonner"

export default function InvoiceActions({
  template,
  setTemplate,
}: {
  template: "classic" | "modern"
  setTemplate: (t: "classic" | "modern") => void
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      
      {/* Template Switch */}
      <div className="flex gap-2">
        {(["classic", "modern"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTemplate(t)}
            className={`px-4 py-2 rounded-full text-sm border cursor-pointer
              ${template === t ? "bg-black text-white" : "bg-white"}
            `}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => exportInvoicePdf("invoice-pdf")}
          className="px-4 py-2 rounded-lg bg-black text-white text-sm border
            hover:bg-white hover:text-black transition cursor-pointer"
        >
          Download PDF
        </button>

        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg border text-sm
            hover:bg-black hover:text-white transition cursor-pointer"
        >
          Print
        </button>

        <button
          onClick={() => toast.success("Invoice emailed (simulated)")}
          className="px-4 py-2 rounded-lg border text-sm
            hover:bg-black hover:text-white transition cursor-pointer"
        >
          Email Invoice
        </button>
      </div>
    </div>
  )
}
