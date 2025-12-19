🎨 Sticker Designer Platform

A full-stack Circle Sticker Customization & Ordering Platform built with Next.js 14, TypeScript, Socket.IO, and Canvas APIs — featuring real-time customer support chat and dynamic invoice generation.

⚡ Built as part of Groviews Technologies’ React Developer Technical Assignment

🚀 Live Demo

https://sticker-designer-six.vercel.app/designer

🧩 Features Overview
🖌️ Part 1: Canvas-Based Sticker Designer

Circular sticker canvas

Image upload (PNG / JPG / SVG)

Resize, rotate, position images

Text addition with styling

Layer controls (bring forward / backward)

Predefined templates

Save draft design

Export design as PNG / PDF

Responsive UI (desktop & mobile)

🛒 Submission & Order Flow

Design summary preview

Size selection (S / M / L)

Quantity selector

Dynamic pricing calculation

Add to cart functionality

Persistent cart using localStorage

Cart management (multiple items)

Smooth user validations & feedback

💬 Part 2: Customer Care Chat Widget (Real-Time)

Floating chat widget

Expand / collapse animation

Real-time messaging using Socket.IO

Typing indicators

Read receipts (✔ / ✔✔)

Message timestamps

Optimistic UI updates

Admin panel (chat response interface)

Multi-role support (User / Agent)

🧾 Part 3: Custom Invoice Generator

Professional invoice layout

Auto-generated invoice numbers

Date & due date handling

Itemized order list with images

Subtotal, tax & total calculation

Two invoice templates

Classic

Modern

PDF download

Print support

Simulated email invoice action

🛠️ Tech Stack
Frontend

Next.js 14 (App Router)

React + TypeScript

Tailwind CSS

HTML5 Canvas

jsPDF

Sonner (toasts)

Backend

Node.js + Express

Socket.IO

TypeScript

CORS

State Management

React Context API

LocalStorage persistence

📂 Project Structure
Sticker-Designer/
│
├── client/                # Next.js frontend
│   ├── src/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── lib/
│   │   ├── types/
│   │   └── app/
│
├── server/                # Socket.IO backend
│   ├── src/
│   │   ├── socket/
│   │   └── index.ts
│
└── shared/                # Shared event typings


Shared types ensure type-safe communication between frontend and backend.

⚙️ Environment Variables
Frontend (client/.env.local)
NEXT_PUBLIC_SOCKET_URL=https://your-backend-url

Backend (server/.env)
PORT=4000
CLIENT_ORIGIN=https://your-frontend-url

▶️ Running Locally
Frontend
cd client
npm install
npm run dev

Backend
cd server
npm install
npm run build
npm start

🧠 Architecture Decisions

Separated frontend & backend for scalability

Socket.IO chosen over polling for real-time efficiency

Optimistic UI updates for smoother chat experience

Modular component structure for maintainability

Shared TypeScript types to avoid runtime bugs

No external canvas editors — manual implementation as required

🧪 Future Improvements

Authentication for admin panel

Multiple chat conversations management

Payment gateway integration

Database persistence for orders & chats

Invoice email integration

Unit & integration tests

🏆 Assignment Coverage
Requirement	Status
Canvas Sticker Designer	✅ Completed
Real-time Chat Widget	✅ Completed
Admin Chat Panel	✅ Completed
Order & Cart Flow	✅ Completed
Invoice Generator	✅ Completed
PDF Export	✅ Completed
Invoice Templates	✅ Completed
🙌 Author

Ayush Juyal
React & Full-Stack Developer
🔗 GitHub: @AyushJuyal07

📜 License

This project is for educational and evaluation purposes.
