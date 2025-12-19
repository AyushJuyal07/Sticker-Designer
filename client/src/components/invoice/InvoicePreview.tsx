// import Image from "next/image"

// export default function InvoicePreview({ invoice }: any) {
//   return (
//     <div className="w-full max-w-2xl mx-auto bg-white text-black p-8 shadow-lg rounded-xl space-y-6">

//       {/* Header */}
//       <div className="flex justify-between items-start">
//         <div>
//           <h1 className="text-2xl font-bold">Groviews Technologies</h1>
//           <p className="text-sm">Custom Sticker Solutions</p>
//         </div>

//         <div className="text-right text-sm">
//           <p><strong>Invoice:</strong> {invoice.invoiceNumber}</p>
//           <p><strong>Date:</strong> {invoice.date}</p>
//           <p><strong>Due:</strong> {invoice.dueDate}</p>
//         </div>
//       </div>

//       <hr />

//       {/* Bill To */}
//       <div>
//         <h2 className="text-sm font-semibold mb-1">Bill To</h2>
//         <p className="text-sm">{invoice.billTo.name}</p>
//         <p className="text-sm">{invoice.billTo.email}</p>
//         <p className="text-sm">{invoice.billTo.address}</p>
//       </div>

//       {/* Items Table */}
//       <table className="w-full text-sm border-collapse">
//         <thead>
//           <tr className="border-b">
//             <th className="text-left py-2">Item</th>
//             <th className="text-center">Qty</th>
//             <th className="text-center">Price</th>
//             <th className="text-center">Total</th>
//           </tr>
//         </thead>

//         <tbody>
//           {invoice.items.map((item: any) => (
//             <tr key={item.id} className="border-b">
//               <td className="py-2 flex items-center gap-3">
//                 <Image
//                   src={item.preview}
//                   alt="Sticker"
//                   width={40}
//                   height={40}
//                   className="rounded-full border"
//                 />
//                 <span>Custom Circle Sticker</span>
//               </td>
//               <td className="text-center">{item.quantity}</td>
//               <td className="text-center">₹{item.unitPrice}</td>
//               <td className="text-center">
//                 ₹{item.quantity * item.unitPrice}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Totals */}
//       <div className="flex justify-end">
//         <div className="w-64 space-y-1 text-sm">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{invoice.subtotal}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Tax (18%)</span>
//             <span>₹{invoice.tax}</span>
//           </div>
//           <div className="flex justify-between font-semibold text-base">
//             <span>Total</span>
//             <span>₹{invoice.total}</span>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <p className="text-xs pt-6">
//         Thank you for your business. This invoice is system generated.
//       </p>
//     </div>
//   )
// }


// import { useState } from "react"
// import TemplateClassic from "./templates/TemplateClassic"
// import TemplateModern from "./templates/TemplateModern"
// import InvoiceTemplateSwitcher from "./InvoiceTemplateSwitcher"

// export default function InvoicePreview({ invoice }: any) {
//   const [template, setTemplate] =
//     useState<"classic" | "modern">("classic")

//   return (
//     <div>
//       <InvoiceTemplateSwitcher
//         template={template}
//         setTemplate={setTemplate}
//       />

//       {template === "classic" && (
//         <TemplateClassic invoice={invoice} />
//       )}

//       {template === "modern" && (
//         <TemplateModern invoice={invoice} />
//       )}
//     </div>
//   )
// }


import TemplateClassic from "./templates/TemplateClassic"
import TemplateModern from "./templates/TemplateModern"

export default function InvoicePreview({
  invoice,
  template,
}: {
  invoice: any
  template: "classic" | "modern"
}) {
  return (
    <>
      {template === "classic" && (
        <TemplateClassic invoice={invoice} />
      )}

      {template === "modern" && (
        <TemplateModern invoice={invoice} />
      )}
    </>
  )
}
