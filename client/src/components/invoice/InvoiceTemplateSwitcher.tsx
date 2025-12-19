export default function InvoiceTemplateSwitcher({
  template,
  setTemplate,
}: {
  template: "classic" | "modern"
  setTemplate: (t: "classic" | "modern") => void
}) {
  return (
    <div className="flex gap-2 mb-4">
      {(["classic", "modern"] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTemplate(t)}
          className={`
            px-4 py-2 rounded-full text-sm border
            ${template === t ? "bg-black text-white" : ""}
          `}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
