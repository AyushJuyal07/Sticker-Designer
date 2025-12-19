// import LayerControl from "./LayerControls";
// import {DeleteControls} from "./DeleteControls";
// import DraftControls from "./DraftControls";

// export default function TopNavbar() {
//   return (
//     <div className="mb-20">
//       <div className="h-12 p-3 flex items-center justify-between rounded-xl border bg-white shadow-sm">
        
//         <LayerControl />
//         <DraftControls />
//         <DeleteControls />
//       </div>
//     </div>
//   );
// }


// import LayerControl from "./LayerControls";
// import { DeleteControls } from "./DeleteControls";
// import DraftControls from "./DraftControls";

// export default function TopNavbar() {
//   return (
//     <div className="mb-20">
//       <div className="h-12 px-4 flex items-center gap-2 rounded-xl border bg-white shadow-sm">

//         {/* Left group */}
//         <div className="flex items-center gap-2">
//           <LayerControl />
//         </div>

//         {/* Center group */}
//         <div className="flex items-center gap-2">
//           <DraftControls />
//         </div>

//         {/* Right group */}
//         <div className="flex items-center">
//           <DeleteControls />
//         </div>

//       </div>
//     </div>
//   );
// }


import {
  ArrowUp,
  ArrowDown,
  Save,
  RotateCcw,
  Trash2
} from "lucide-react"

import LayerControl from "./LayerControls"
import { DeleteControls } from "./DeleteControls"
import DraftControls from "./DraftControls"

export default function TopNavbar() {
  return (
    <div>
      <div
        className="
          h-12 px-2
          flex items-center gap-2
          rounded-xl bg-white shadow-sm
        "
      >
        {/* LEFT – Layer controls */}
        <div className="flex items-center gap-1">
          {/* Mobile icons */}
          <div className="flex md:hidden gap-1">
            <LayerControl iconOnly />
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex">
            <LayerControl />
          </div>
        </div>

        {/* CENTER – Draft */}
        <div className="flex items-center gap-1 mx-auto">
          {/* Mobile icons */}
          <div className="flex md:hidden gap-1">
            <DraftControls iconOnly />
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex">
            <DraftControls />
          </div>
        </div>

        {/* RIGHT – Delete */}
        <div className="flex items-center">
          <DeleteControls />
        </div>
      </div>
    </div>
  )
}
