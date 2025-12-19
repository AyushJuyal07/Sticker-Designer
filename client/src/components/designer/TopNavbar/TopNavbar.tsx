
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

        <div className="flex items-center gap-1">

          <div className="flex md:hidden gap-1">
            <LayerControl iconOnly />
          </div>

          <div className="hidden md:flex">
            <LayerControl />
          </div>
        </div>

        <div className="flex items-center gap-1 mx-auto">

          <div className="flex md:hidden gap-1">
            <DraftControls iconOnly />
          </div>

          <div className="hidden md:flex">
            <DraftControls />
          </div>
        </div>

        <div className="flex items-center">
          <DeleteControls />
        </div>
      </div>
    </div>
  )
}
