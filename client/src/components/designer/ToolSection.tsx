// "use client"

// import { ReactNode, useState } from "react"

// type ToolSectionProps = {
//   title: string
//   enabled?: boolean
//   children: ReactNode
// }

// export default function ToolSection({
//   title,
//   enabled = true,
//   children
// }: ToolSectionProps) {
//   const [open, setOpen] = useState(false)

//   return (
//     <div className="border-b pb-2">
//       <button
//         onClick={() => setOpen(v => !v)}
//         className="
//           flex w-full items-center justify-between
//           text-left text-sm font-semibold
//         "
//       >
//         <span
//           className={enabled ? "text-black" : "text-gray-400"}
//         >
//           {title}
//         </span>
//         <span className="text-xs">
//           {open ? "▴" : "▾"}
//         </span>
//       </button>

//       {open && (
//         <div
//           className={`
//             mt-2 space-y-2
//             ${enabled ? "" : "opacity-50 pointer-events-none"}
//           `}
//         >
//           {children}
//         </div>
//       )}
//     </div>
//   )
// }


"use client"

import { ReactNode, useState } from "react"

type ToolSectionProps = {
  title: string
  enabled?: boolean
  children: ReactNode
}

export default function ToolSection({
  title,
  enabled = true,
  children
}: ToolSectionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(v => !v)}
        className="
          flex w-full items-center justify-between
          py-1 px-1
          text-left
          transition-colors duration-200
          hover:bg-gray-50
          rounded-lg
          group
        "
      >
        <span
          className={`
            text-sm font-semibold tracking-wide
            transition-colors duration-200
            ${enabled 
              ? "text-gray-900 group-hover:text-blue-600" 
              : "text-gray-400"
            }
          `}
        >
          {title}
        </span>
        <span 
          className={`
            text-lg font-light
            transition-all duration-300
            ${open ? "rotate-180" : "rotate-0"}
            ${enabled ? "text-gray-600" : "text-gray-400"}
          `}
        >
          ▾
        </span>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className={`
            pb-4 px-1 space-y-3
            ${enabled ? "" : "opacity-50 pointer-events-none"}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  )
}