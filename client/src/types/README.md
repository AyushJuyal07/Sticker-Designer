# 🧾 Types (Shared Type Definitions)

This directory contains **shared TypeScript type definitions** used across the application.

The goal of this folder is to:
- Maintain strong type safety
- Avoid type duplication
- Keep contracts consistent between features
- Improve readability and maintainability

---

## 📂 Structure

types/
└── chat.types.ts

---

## 💬 `chat.types.ts`

Defines all **shared types and interfaces** related to the real-time chat system.

### Responsibilities
- Message payload structure
- User metadata for chat sessions
- Socket event typings
- Client ↔ Server communication contracts

These types are consumed by:
- Chat UI components
- Socket connection logic
- Backend socket handlers (if shared)

---

## 🔗 Why Centralized Types?

- Prevents mismatch between frontend and backend payloads
- Enables IDE autocomplete and compile-time validation
- Makes refactoring safer and faster
- Improves developer onboarding

---

## 🧠 Design Philosophy
- Feature-specific types live together
- No UI or business logic inside this folder
- Pure TypeScript definitions only

---

## ⚠️ Notes
- Types in this folder are safe to reuse across layers
- Any breaking change here should be reviewed carefully
- New shared contracts should be added here instead of inline typing

---
