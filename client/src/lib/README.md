# 🧰 lib

This directory contains **framework-agnostic utility logic and domain-specific helpers** used across the Sticker Designer Platform.

All files inside `lib/` are designed to be:
- Reusable
- Stateless
- Easy to test
- Independent of UI components

---

## 📂 Folder Structure

lib/
│
├── fabric/ → Canvas & design-related utilities
├── invoice/ → Invoice calculation & PDF helpers
├── order/ → Pricing & order logic
├── socket/ → Socket.IO client setup
├── templates/ → Reusable template definitions


---

## 🎨 `fabric/`

Utilities related to **Canvas and Fabric.js-based logic**.

fabric/
├── drafts.ts → Save & restore canvas draft state
├── export.ts → Export canvas as PNG / PDF


### Responsibilities
- Serialize and deserialize canvas state
- Maintain draft versions of sticker designs
- Generate export-ready assets from canvas

---

## 🧾 `invoice/`

Contains **business logic** for invoice generation and PDF exports.

invoice/
├── calculations.ts → Subtotal, tax & total calculations
├── exportPdf.ts → PDF generation using jsPDF
├── generateInvoiceNumber.ts → Unique invoice number generation
├── pdf.ts → PDF layout helpers
└── types.ts → Invoice-related TypeScript types


### Responsibilities
- Calculate pricing and taxes
- Generate structured invoice data
- Support multiple invoice templates
- Export print-ready PDFs

---

## 🛒 `order/`

order/
└── pricing.ts → Dynamic pricing logic based on size & quantity


### Responsibilities
- Centralized pricing rules
- Prevent duplicated pricing logic across components
- Ensure consistent order calculations

---

## 🔌 `socket/`

socket/
└── socket.ts → Socket.IO client configuration


### Responsibilities
- Initialize Socket.IO client
- Handle reconnection and transport configuration
- Provide a single socket instance across the app

---

## 📐 `templates/`

templates/
└── templates.ts → Shared template definitions


### Responsibilities
- Define reusable design or invoice templates
- Keep template configuration separate from UI logic

---

## 🧠 Design Principles
- No UI or styling logic inside `lib/`
- Pure functions wherever possible
- Feature-based separation
- Shared logic consumed by multiple components
- Improves maintainability and testability

---

## ⚠️ Notes
- All utilities are written in TypeScript
- Side effects are minimized
- Functions are imported selectively to reduce bundle size

---