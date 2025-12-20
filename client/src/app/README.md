# 📁 App Router (`/app`)

This directory contains the **route-based structure** of the Sticker Designer Platform, built using **Next.js 14 App Router**.

Each folder inside `app/` represents a **route segment** and encapsulates its own UI, logic, and layout where applicable.

---

## 🧭 Route Overview

app/
│
├── admin-panel-7879/ → Admin chat panel (restricted access)
├── cart/ → Cart management & order review
├── designer/ → Canvas-based sticker designer
├── invoice/ → Invoice generation & PDF export
├── summary/ → Order summary & confirmation
├── layout.tsx → Root layout shared across routes
└── page.tsx → Landing page (home)


---

## 🖌️ `/designer`
- Core feature of the application
- Initializes the circular canvas
- Handles image uploads, text, transformations, and layers
- Maintains design state via React Context
- Supports export to PNG / PDF

---

## 🛒 `/cart`
- Displays all added sticker designs
- Allows quantity updates and item removal
- Cart state is persisted using `localStorage`
- Acts as a bridge between design and checkout flow

---

## 📋 `/summary`
- Shows a complete preview of the selected design
- Handles size selection (S / M / L)
- Calculates dynamic pricing
- Validates order before invoice generation

---

## 🧾 `/invoice`
- Generates professional invoices using `jsPDF`
- Supports multiple invoice templates (Classic / Modern)
- Auto-generates invoice numbers and dates
- Enables PDF download and print support

---

## 🛠️ `/admin-panel-7879`
- Admin interface for real-time customer support
- Connects to Socket.IO backend
- Handles incoming user messages
- Supports typing indicators and read receipts
- Route name is intentionally obfuscated for basic access control

---

## 🧱 `layout.tsx`
- Root layout for the entire application
- Includes global providers (Context, Toaster, etc.)
- Ensures consistent UI structure across routes

---

## 🌐 `page.tsx`
- Entry point of the application
- Acts as a landing page
- Redirects users toward the sticker designer flow

---

## 🎯 Design Philosophy
- Route-based separation for clarity and scalability
- Minimal coupling between routes
- Shared global state only where necessary
- Optimized for interactive, client-heavy workflows

---

## ⚠️ Notes
- Most routes are **client components** due to heavy interactivity
- Canvas rendering and Socket.IO connections are initialized lazily
- Accessibility and performance considerations are handled per route

---