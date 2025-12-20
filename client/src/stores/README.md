# 🗂️ Stores (Global State Management)

This directory contains **React Context–based global state providers** used across the Sticker Designer Platform.

State is centralized here to:
- Avoid prop drilling
- Keep business state separate from UI components
- Enable predictable data flow across routes

---

## 📂 Store Structure

stores/
│
├── cart.context.tsx → Cart & item management state
├── designer.context.tsx → Canvas & design state
└── order.context.tsx → Order & pricing state


---

## 🎨 `designer.context.tsx`

Manages the **core sticker design state**.

### Responsibilities
- Holds the Fabric.js canvas instance
- Tracks selected objects
- Handles undo / redo history
- Saves design snapshots
- Exposes canvas manipulation helpers
- Acts as a single source of truth for the designer

---

## 🛒 `cart.context.tsx`

Manages the **shopping cart state**.

### Responsibilities
- Add and remove designs from cart
- Update item quantities
- Persist cart data to `localStorage`
- Restore cart state on page reload
- Support multiple items simultaneously

---

## 📦 `order.context.tsx`

Manages **order-specific data**.

### Responsibilities
- Store selected sticker size (S / M / L)
- Handle quantity selection
- Compute pricing dynamically
- Share order data between summary and invoice flows

---

## 🔄 State Flow Overview

- UI components **consume state** via custom hooks
- State updates trigger reactive UI updates
- Data flows from:
  - `designer` → `cart` → `order` → `invoice`
- Local persistence is handled where required

---

## 🧠 Design Principles
- Feature-scoped contexts instead of a single global store
- Minimal re-renders through focused providers
- Clear separation between UI and state logic
- Scalable approach without external state libraries

---

## ⚠️ Notes
- Context API chosen for simplicity and clarity
- External state managers were avoided due to moderate app complexity
- Designed for easy migration to Redux/Zustand if required in the future

---

