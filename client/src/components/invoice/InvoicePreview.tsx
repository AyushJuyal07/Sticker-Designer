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
