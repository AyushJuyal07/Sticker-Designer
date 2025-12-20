6️⃣ Application Flow 

## 🔄 Application Flow

### 1. Sticker Design Flow
1. User lands on the `/designer` route
2. Canvas initializes with a circular base
3. User adds images or text elements
4. Objects can be resized, rotated, repositioned
5. Layer order is managed via controls
6. Design state is maintained in React Context
7. User can export the final design as PNG or PDF

---

### 2. Order & Cart Flow
1. User proceeds to order submission
2. Design preview is generated
3. Size and quantity are selected
4. Price is calculated dynamically
5. Item is added to cart
6. Cart data is persisted in `localStorage`
7. Multiple designs can be managed in the cart

---

### 3. Real-Time Chat Flow
1. User opens the floating chat widget
2. Socket.IO connection is established
3. Messages are sent with optimistic UI updates
4. Typing indicators and read receipts are handled in real time
5. Admin responds via a dedicated panel
6. Shared TypeScript events ensure type-safe communication

---

### 4. Invoice Generation Flow
1. Order confirmation triggers invoice creation
2. Invoice number is auto-generated
3. Items, pricing, and taxes are calculated
4. User selects invoice template (Classic / Modern)
5. Invoice is generated using jsPDF
6. PDF can be downloaded or printed
