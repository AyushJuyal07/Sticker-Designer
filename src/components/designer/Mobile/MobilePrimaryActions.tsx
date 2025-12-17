"use client"

import ImageUploader from "../Image/ImageUploader"
import AddTextButton from "../Text/AddTextButton"

export default function MobilePrimaryActions({
  onOpenToolbar,
}: {
  onOpenToolbar: () => void
}) {
  return (
    <div className="md:hidden w-full flex justify-center gap-4 px-4 pb-4">
      <div className="flex-1  max-w-[160px]">
        <ImageUploader />
      </div>

      <div className="flex-1 max-w-[160px]">
        <AddTextButton />
      </div>
    </div>
  )
}
