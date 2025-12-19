// import Image from "next/image"

// export default function InvoicePreviewModern({ invoice }: any) {
//   return (
//     <div id="invoice-container" className="w-full max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 shadow-2xl rounded-2xl overflow-hidden">
      
//       {/* Header with Dark Background */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight">Groviews Technologies</h1>
//             <p className="text-blue-100 text-sm mt-1">Custom Sticker Solutions</p>
//           </div>
          
//           <div className="text-right bg-white/10 backdrop-blur-sm rounded-lg p-4">
//             <p className="text-xs text-blue-100 mb-1">INVOICE</p>
//             <p className="text-lg font-bold">{invoice.invoiceNumber}</p>
//           </div>
//         </div>
//       </div>

//       <div className="p-8 space-y-6">
//         {/* Dates and Bill To - Side by Side */}
//         <div className="grid grid-cols-2 gap-6">
//           {/* Bill To */}
//           <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
//             <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">Bill To</h2>
//             <p className="font-semibold text-gray-900">{invoice.billTo.name}</p>
//             <p className="text-sm text-gray-600 mt-1">{invoice.billTo.email}</p>
//             <p className="text-sm text-gray-600">{invoice.billTo.address}</p>
//           </div>

//           {/* Dates */}
//           <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
//             <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">Details</h2>
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Invoice Date:</span>
//                 <span className="font-semibold text-gray-900">{invoice.date}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Due Date:</span>
//                 <span className="font-semibold text-gray-900">{invoice.dueDate}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Items Table */}
//         <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
//                 <th className="text-left py-4 px-5 font-semibold text-blue-900">Item</th>
//                 <th className="text-center py-4 px-3 font-semibold text-blue-900">Qty</th>
//                 <th className="text-center py-4 px-3 font-semibold text-blue-900">Price</th>
//                 <th className="text-right py-4 px-5 font-semibold text-blue-900">Total</th>
//               </tr>
//             </thead>

//             <tbody>
//               {invoice.items.map((item: any, index: number) => (
//                 <tr key={item.id} className={`border-b border-gray-100 hover:bg-blue-50/30 transition ${index === invoice.items.length - 1 ? 'border-none' : ''}`}>
//                   <td className="py-4 px-5">
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <Image
//                           src={item.preview}
//                           alt="Sticker"
//                           width={48}
//                           height={48}
//                           className="rounded-full border-2 border-blue-200 shadow-sm"
//                         />
//                       </div>
//                       <span className="font-medium text-gray-900">Custom Circle Sticker</span>
//                     </div>
//                   </td>
//                   <td className="text-center py-4 px-3 text-gray-700">{item.quantity}</td>
//                   <td className="text-center py-4 px-3 text-gray-700">₹{item.unitPrice}</td>
//                   <td className="text-right py-4 px-5 font-semibold text-gray-900">
//                     ₹{item.quantity * item.unitPrice}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Totals */}
//         <div className="flex justify-end">
//           <div className="w-80 bg-white rounded-xl shadow-sm border border-blue-100 p-5">
//             <div className="space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className="font-medium text-gray-900">₹{invoice.subtotal}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Tax (18%)</span>
//                 <span className="font-medium text-gray-900">₹{invoice.tax}</span>
//               </div>
//               <div className="border-t border-blue-100 pt-3">
//                 <div className="flex justify-between">
//                   <span className="font-semibold text-gray-900">Total</span>
//                   <span className="text-xl font-bold text-blue-600">₹{invoice.total}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
//           <p className="text-xs text-gray-600 text-center">
//             Thank you for your business. This invoice is system generated.
//           </p>
//           <p className="text-xs text-gray-500 text-center mt-2">
//             Terms: Payment due within 7 days. Late payments may incur additional charges.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

import Image from "next/image"

export default function InvoicePreviewModern({ invoice }: any) {
  return (
    <div id="invoice-container" className="w-full max-w-2xl mx-auto bg-blue-50 text-gray-900 shadow-2xl rounded-2xl overflow-hidden">
      
      {/* Header with Dark Background */}
      <div className="bg-blue-600 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Groviews Technologies</h1>
            <p className="text-blue-100 text-sm mt-1">Custom Sticker Solutions</p>
          </div>
          
          <div className="text-right bg-blue-700 rounded-lg p-4">
            <p className="text-xs text-blue-100 mb-1">INVOICE</p>
            <p className="text-lg font-bold">{invoice.invoiceNumber}</p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Dates and Bill To - Side by Side */}
        <div className="grid grid-cols-2 gap-6">
          {/* Bill To */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">Bill To</h2>
            <p className="font-semibold text-gray-900">{invoice.billTo.name}</p>
            <p className="text-sm text-gray-600 mt-1">{invoice.billTo.email}</p>
            <p className="text-sm text-gray-600">{invoice.billTo.address}</p>
          </div>

          {/* Dates */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Invoice Date:</span>
                <span className="font-semibold text-gray-900">{invoice.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Due Date:</span>
                <span className="font-semibold text-gray-900">{invoice.dueDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-50 border-b border-blue-100">
                <th className="text-left py-4 px-5 font-semibold text-blue-900">Item</th>
                <th className="text-center py-4 px-3 font-semibold text-blue-900">Qty</th>
                <th className="text-center py-4 px-3 font-semibold text-blue-900">Price</th>
                <th className="text-right py-4 px-5 font-semibold text-blue-900">Total</th>
              </tr>
            </thead>

            <tbody>
              {invoice.items.map((item: any, index: number) => (
                <tr key={item.id} className={`border-b border-gray-100 hover:bg-blue-50/30 transition ${index === invoice.items.length - 1 ? 'border-none' : ''}`}>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={item.preview}
                          alt="Sticker"
                          width={48}
                          height={48}
                          className="rounded-full border-2 border-blue-200 shadow-sm"
                        />
                      </div>
                      <span className="font-medium text-gray-900">Custom Circle Sticker</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-3 text-gray-700">{item.quantity}</td>
                  <td className="text-center py-4 px-3 text-gray-700">₹{item.unitPrice}</td>
                  <td className="text-right py-4 px-5 font-semibold text-gray-900">
                    ₹{item.quantity * item.unitPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-80 bg-white rounded-xl shadow-sm border border-blue-100 p-5">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">₹{invoice.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (18%)</span>
                <span className="font-medium text-gray-900">₹{invoice.tax}</span>
              </div>
              <div className="border-t border-blue-100 pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-blue-600">₹{invoice.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
          <p className="text-xs text-gray-600 text-center">
            Thank you for your business. This invoice is system generated.
          </p>
          <p className="text-xs text-gray-500 text-center mt-2">
            Terms: Payment due within 7 days. Late payments may incur additional charges.
          </p>
        </div>
      </div>
    </div>
  )
}