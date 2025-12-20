"use client"

import { exportInvoicePdf } from "@/lib/invoice/exportPdf"
import { toast } from "sonner"
import { Download, Printer, Mail, LayoutTemplate } from "lucide-react" 

export default function InvoiceActions({
  template,
  setTemplate,
}: {
  template: "classic" | "modern"
  setTemplate: (t: "classic" | "modern") => void
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      

      <div className="flex gap-2">
        {(["classic", "modern"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTemplate(t)}
            aria-label={`Switch to ${t} template`} 
            className={`px-4 py-2 rounded-full text-sm border cursor-pointer
              flex items-center gap-2
              ${template === t ? "bg-black text-white" : "bg-white"}
            `}
          >

            <LayoutTemplate size={16} />


            <span className="hidden sm:inline capitalize">{t}</span>
          </button>
        ))}
      </div>


      <div className="flex gap-3">
     
        <button
          onClick={() => exportInvoicePdf("invoice-pdf")}
          aria-label="Download invoice PDF" 
          className="px-4 py-2 rounded-lg bg-black text-white text-sm border
            hover:bg-white hover:text-black transition cursor-pointer
            flex items-center gap-2"
        >
          <Download size={16} /> 
          <span className="hidden sm:inline">Download PDF</span> 
        </button>


        <button
          onClick={() => window.print()}
          aria-label="Print invoice"
          className="px-4 py-2 rounded-lg border text-sm
            hover:bg-black hover:text-white transition cursor-pointer
            flex items-center gap-2"
        >
          <Printer size={16} />
          <span className="hidden sm:inline">Print</span>
        </button>

        <button
          onClick={() => toast.success("Invoice emailed (simulated)")}
          aria-label="Email invoice"
          className="px-4 py-2 rounded-lg border text-sm
            hover:bg-black hover:text-white transition cursor-pointer
            flex items-center gap-2"
        >
          <Mail size={16} />
          <span className="hidden sm:inline">Email Invoice</span>
        </button>
      </div>
    </div>
  )
}
