# 🎨 Sticker Designer Platform

A **full-stack Circle Sticker Customization & Ordering Platform** built with **Next.js 14, TypeScript, Socket.IO, and Canvas APIs** — featuring real-time customer support chat and dynamic invoice generation.

---

## 🚀 Live Demo

🔗 **Sticker Designer**  
👉 https://sticker-designer-six.vercel.app/designer

---

## 🧩 Features Overview

### 🖌️ Canvas-Based Sticker Designer
- Circular sticker canvas
- Image upload (PNG / JPG / SVG)
- Resize, rotate, and reposition images
- Text addition with styling options
- Layer controls (bring forward / send backward)
- Predefined sticker templates
- Save draft design
- Export design as **PNG / PDF**
- Fully responsive UI (desktop & mobile)

---
<img width="1858" height="922" alt="image" src="https://github.com/user-attachments/assets/7eabc7db-8f34-428c-9196-4e6c3bf4eb85" />

### 🛒 Submission & Order Flow
- Design summary preview
- Size selection (S / M / L)
- Quantity selector
- Dynamic pricing calculation
- Add to cart functionality
- Persistent cart using `localStorage`
- Cart management for multiple items
- Smooth validations & user feedback

---
<img width="1856" height="920" alt="image" src="https://github.com/user-attachments/assets/9887cee8-eaa0-4f11-b7ba-89c5c143838c" />

### 💬 Customer Care Chat Widget (Real-Time)
- Floating chat widget (bottom-right)
- Expand / collapse animations
- Real-time messaging using **Socket.IO**
- Typing indicators
- Read receipts (✔ / ✔✔)
- Message timestamps
- Optimistic UI updates
- Admin panel for chat responses
- Multi-role support (User / Agent)

---
<img width="1861" height="920" alt="image" src="https://github.com/user-attachments/assets/3a30fcee-128c-485e-a277-925d3fe0e3bf" />

### 🧾 Custom Invoice Generator
- Professional invoice layout
- Auto-generated invoice numbers
- Date & due-date handling
- Itemized order list with images
- Subtotal, tax & total calculations
- Two invoice templates:
  - Classic
  - Modern
- PDF download support
- Print-ready format
- Simulated email invoice action

---
<img width="1838" height="926" alt="image" src="https://github.com/user-attachments/assets/c9fec174-fb5c-4763-b6e6-58fb9b41a52d" />

## 🛠️ Tech Stack

### Frontend
- **Next.js 14 (App Router)**
- **React + TypeScript**
- **Tailwind CSS**
- **HTML5 Canvas APIs**
- **jsPDF**
- **Sonner (Toast Notifications)**

### Backend
- **Node.js + Express**
- **Socket.IO**
- **TypeScript**
- **CORS**

### State Management
- React Context API
- `localStorage` persistence

---

## 📂 Project Structure

Sticker-Designer/
│
├── client/ # Next.js frontend
│ ├── src/
│ │ ├── components/
│ │ ├── stores/
│ │ ├── lib/
│ │ ├── types/
│ │ └── app/
│
├── server/ # Socket.IO backend
│ ├── src/
│ │ ├── socket/
│ │ ├── types/
│ │ └── index.ts

---

## ⚙️ Environment Variables

### Frontend (`client/.env.local`)
```env
NEXT_PUBLIC_SOCKET_URL=https://your-backend-url

### Backend (server/.env)

PORT=4000
CLIENT_ORIGIN=https://your-frontend-url

---

▶️ Running Locally

Frontend

cd client
npm install
npm run dev

Backend

cd server
npm install
npm run build

---

## 🧠 Architecture Decisions
- Separated frontend & backend for better scalability
- Socket.IO chosen over polling for real-time efficiency
- Optimistic UI updates for smoother chat experience
- Modular component structure for maintainability
- Shared TypeScript types to prevent runtime bugs
- Manual Canvas implementation (no external editors) as per assignment rules

---

## 🧪 Future Improvements
- Authentication for admin panel
- Multiple chat conversation management
- Payment gateway integration
- Database persistence for orders & chats
- Email-based invoice delivery
- Unit & integration testing

---

## 🙌 Author
Ayush Juyal
React & Full-Stack Developer
