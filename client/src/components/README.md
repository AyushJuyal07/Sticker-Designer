# 🧩 Components

This directory contains all **reusable and feature-scoped UI components** used across the Sticker Designer Platform.

Components are organized by **feature domain** rather than by generic type, improving maintainability, scalability, and readability.

---

## 📂 Folder Structure

components/
│
├── cart/ → Cart-related UI components
├── chat/ → Real-time chat widget components
├── designer/ → Canvas-based sticker designer components
├── invoice/ → Invoice rendering & export components


---

## 🖌️ `designer/`

This folder contains the **core UI logic** for the sticker design experience.

designer/
│
├── Canvas/ → Fabric.js canvas setup & rendering
├── Exports/ → PNG / PDF export logic
├── Image/ → Image upload & manipulation tools
├── Mobile/ → Mobile-specific UI controls
├── Text/ → Text creation & styling tools
├── Toolbar/ → Designer toolbar actions
├── TopNavbar/ → Top navigation controls
├── CanvasControls.tsx
├── ProceedButton.tsx
├── Templates.tsx
└── ToolSection.tsx


### Key Responsibilities
- Initialize and manage the circular canvas
- Handle object transformations (resize, rotate, move)
- Manage layering (bring forward / send backward)
- Support predefined templates
- Enable undo/redo functionality
- Adapt controls for mobile & desktop views

---

## 🛒 `cart/`
- Displays items added to the cart
- Handles quantity updates and removals
- Syncs cart state with `localStorage`
- Prepares data for summary & invoice flow

---

## 💬 `chat/`
- Floating customer support chat widget
- Expand / collapse animations
- Real-time messaging via Socket.IO
- Typing indicators and read receipts
- Optimistic UI updates for smoother UX

---

## 🧾 `invoice/`

Responsible for rendering and exporting invoices.

invoice/
│
├── templates/ → Classic & Modern invoice templates
├── InvoicePreview.tsx → Visual invoice preview
└── InvoiceActions.tsx → Download, print & export actions


### Key Responsibilities
- Generate itemized invoices with images
- Calculate subtotal, tax, and total
- Support multiple invoice layouts
- Export invoices as PDF using `jsPDF`

---

## 🧠 Design Principles
- Feature-based component organization
- Minimal prop drilling (Context-driven state)
- Reusable, composable UI blocks
- Separation of UI and business logic
- Optimized for interactive, canvas-heavy workflows

---

## ⚠️ Notes
- Most components are **client components** due to interactivity
- Accessibility enhancements are planned for icon-based controls
- Performance optimizations are applied where applicable

---