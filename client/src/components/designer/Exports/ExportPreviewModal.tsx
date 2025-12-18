"use client"

type ExportPreviewModalProps = {
  imageUrl: string
  onCancel: () => void
  onConfirm: () => void
}

export default function ExportPreviewModal({
  imageUrl,
  onCancel,
  onConfirm
}: ExportPreviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[320px] rounded-lg bg-white p-4 shadow-lg">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Export Preview
        </h3>

        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt="Sticker preview"
            className="h-56 w-56 rounded-full border"
          />
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  )
}
