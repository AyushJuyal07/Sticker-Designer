"use client"

import CanvasControls from "../CanvasControls"
import CropControls from "../Image/CropControls"
import ExportButton from "../Exports/ExportButton"
import ImageUploader from "../Image/ImageUploader"
import LayerControls from "../TopNavbar/LayerControls"
// import TextControls from "../Text/TextControls"
import { DeleteControls } from "../TopNavbar/DeleteControls"
import DraftControls from "../TopNavbar/DraftControls"
import Templates from "../Templates"
import ToolSection from "../ToolSection"
import { useDesigner } from "@/stores/designer.context"
import AddTextButton from "../Text/AddTextButton"
import TextEditControls from "../Text/TextEditControls"
import ProceedButton from "../ProceedButton"




// import UndoRedoControls from "../UndoRedo/UndoRedoControls"

export default function Toolbar() {
  const { selectedObject, isCropping } = useDesigner()
  return (
    <aside   className="
    w-full
    md:w-72
    shrink-0
    h-full
    overflow-y-auto
    bg-white
    
    px-4
    py-6
    space-y-8
    shadow-sm
  ">
      <h2 className="text-lg text-gray-900 font-semibold tracking-tight">
        Sticker Tools
      </h2>

      {/* <CanvasControls /> */}
      <div className="hidden md:block space-y-4">
        <ImageUploader />
        <AddTextButton />
      </div>

      {/* <ImageUploader />
      <AddTextButton /> */}
      <ToolSection
        title="Edit Image"
        enabled={selectedObject?.type === "image" || isCropping}
      >
        <CropControls />
      </ToolSection>

      <ToolSection
        title="Edit Text"
        enabled={selectedObject?.type === "textbox"}
      >
        <TextEditControls />
      </ToolSection>


      <ToolSection
        title="Template"
        enabled={true}
      >
      <Templates />
      </ToolSection>

            <ToolSection
        title="Export"
        enabled={true}
      >
      <ExportButton />
      </ToolSection>
      
      <ProceedButton />

    </aside>
  )
}


